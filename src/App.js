import React, { useState, useEffect, forwardRef } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [currentPage, setCurrentPage] = useState([]);
  const [page, setPage] = useState(0);
  const foward = () => {
    page >= 9 ? setPage(0) : setPage(page + 1);
  };
  const back = () => {
    page <= 0 ? setPage(9) : setPage(page - 1);
  };
  const manageClick = (e) => {
    const targetPage = parseInt(e.target.innerText) - 1;
    setPage(targetPage);
    setCurrentPage(data[page]);
  };

  useEffect(() => {
    if (loading) return;
    setCurrentPage(data[page]);
  }, [loading, page]);

  return (
    <>
      <main>
        <div className="section-title ">
          <h1>Pagination</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {currentPage.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          <div className="btn-container">
            <button className="prev-btn" onClick={back}>
              Prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  className={`${
                    index == page ? `page-btn active-btn` : `page-btn`
                  }`}
                  onClick={(e) => manageClick(e)}
                  key={index + 1}
                >
                  {index + 1}
                </button>
              );
            })}

            <button className="next-btn" onClick={foward}>
              Next
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
