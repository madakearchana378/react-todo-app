import React from "react";

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-buttons">

      <button
        onClick={function () {
          setFilter("all");
        }}
      >
        All
      </button>

      <button
        onClick={function () {
          setFilter("completed");
        }}
      >
        Completed
      </button>

      <button
        onClick={function () {
          setFilter("pending");
        }}
      >
        Pending
      </button>

    </div>
  );
}

export default FilterButtons;