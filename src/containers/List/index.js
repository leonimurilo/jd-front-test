import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { StatefulDataTable } from "baseui/data-table";
import { columns } from "./columns";
import { Button, KIND } from "baseui/button";
import Delete from "baseui/icon/delete-alt.js";
import { Select } from "baseui/select";
import { Pagination, SIZE } from "baseui/pagination";
import { UFList } from "../../constants/UFs";
import { getDocs, deleteDoc } from "../../services/api";

const PAGE_SIZE = 10;

function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDocs, setCurrentDocs] = useState([]);
  const [ufFilter, setUfFilter] = React.useState(null);

  const loadPage = useCallback(async (page, ufFilter) => {
    try {
      let uf;

      if (ufFilter && ufFilter[0] && ufFilter[0].id) {
        uf = ufFilter[0].id;
      }
      setIsLoading(true);
      const { data, headers } = await getDocs(uf, page, PAGE_SIZE);
      setTotalPageCount(Math.ceil(headers["x-total-count"] / PAGE_SIZE));
      setCurrentDocs(data.map((doc) => ({ id: doc.id, data: doc })));
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteItem = useCallback(
    async (docId) => {
      try {
        setIsLoading(true);
        await deleteDoc(docId);
        const nextDocList = currentDocs.filter((doc) => doc.id !== docId);
        setCurrentDocs(nextDocList);
        loadPage(currentPage, ufFilter); // reload page?
      } catch (error) {
        alert(error);
      }
    },
    [currentDocs, currentPage, ufFilter, loadPage]
  );

  useEffect(() => {
    loadPage(currentPage, ufFilter);
  }, [currentPage, ufFilter, loadPage]);

  const rowActions = [
    {
      label: "Remove",
      onClick: ({ row }) => {
        deleteItem(row.id);
      },
      renderIcon: ({ size }) => <Delete size={size} style={{ color: "red" }} />,
    },
  ];

  return (
    <div className="list">
      <div className="list__header">
        <div className="list__filters">
          <Select
            size={SIZE.compact}
            options={UFList}
            value={ufFilter}
            placeholder="Filter by UF"
            onChange={(params) => setUfFilter(params.value)}
          />
        </div>
        <div className="list__actions">
          <Button
            size={SIZE.compact}
            kind={KIND.primary}
            $as={Link}
            to="/docs/new"
          >
            New doc
          </Button>
        </div>
      </div>
      <div className="list__data-table">
        <StatefulDataTable
          rowActions={rowActions}
          searchable={false}
          filterable={false}
          columns={columns}
          rows={currentDocs}
          loading={isLoading}
          sortable={false}
        />
      </div>
      <div className="list__pagination">
        <Pagination
          size={SIZE.compact}
          numPages={totalPageCount}
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(Math.min(Math.max(nextPage, 1), totalPageCount));
          }}
        />
      </div>
    </div>
  );
}

export default List;
