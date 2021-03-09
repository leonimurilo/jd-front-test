import React, { useState, useEffect } from "react";
import { getDocs } from "../../services/api";

function List(props) {
  const [page, setPage] = useState(1);
  const [currentDocs, setCurrentDocs] = useState([]);

  const loadPage = async (page) => {
    try {
      const { data } = await getDocs(page);
      setCurrentDocs(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadPage(1);
  }, []);

  return (
    <div>
      {currentDocs.map((doc) => (
        <div key={doc.id}>
          <p>{JSON.stringify(doc)}</p>
        </div>
      ))}
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default List;
