import React, { useState, useEffect, useCallback } from "react";
import {
  StatefulDataTable,
  NumericalColumn,
  StringColumn,
} from "baseui/data-table";
import { Pagination } from "baseui/pagination";
import { Spinner } from "baseui/spinner";

import { getDocs } from "../../services/api";

const columns = [
  StringColumn({
    title: "ID",
    mapDataToValue: (data) => data.id,
  }),
  StringColumn({
    title: "Código ibge do município",
    mapDataToValue: (data) => data.ibge,
  }),
  StringColumn({
    title: "Ano e mês de referência",
    mapDataToValue: (data) => data.anomes,
  }),
  NumericalColumn({
    title: "Benefícios básicos",
    mapDataToValue: (data) => data.qtd_ben_bas,
  }),
  NumericalColumn({
    title: "Benefícios variáveis",
    mapDataToValue: (data) => data.qtd_ben_var,
  }),
  NumericalColumn({
    title: "Benefícios jovem",
    mapDataToValue: (data) => data.qtd_ben_bvj,
  }),
  NumericalColumn({
    title: "Benefícios nutriz",
    mapDataToValue: (data) => data.qtd_ben_bvn,
  }),
  NumericalColumn({
    title: "Benefícios gestantes",
    mapDataToValue: (data) => data.qtd_ben_bvg,
  }),
  NumericalColumn({
    title: "Benefícios superação extrema pobreza",
    mapDataToValue: (data) => data.qtd_ben_bsp,
  }),
];

function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDocs, setCurrentDocs] = useState([]);

  const loadPage = useCallback(async (page) => {
    try {
      setIsLoading(true);
      const { data } = await getDocs(page);
      setCurrentDocs(data.map((doc) => ({ id: doc.id, data: doc })));
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage(currentPage);
  }, [currentPage, loadPage]);

  return (
    <div>
      <Pagination
        numPages={20} // todo: get total count to calculate total number of pages
        currentPage={currentPage}
        onPageChange={({ nextPage }) => {
          setCurrentPage(Math.min(Math.max(nextPage, 1), 20));
        }}
      />
      <div style={{ height: "800px" }}>
        <StatefulDataTable
          columns={columns}
          rows={currentDocs}
          loading={isLoading}
          loadingMessage={() => (
            <div>
              <Spinner />
            </div>
          )}
        />
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default List;
