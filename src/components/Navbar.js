import React from "react";

function Navbar({ search, setSearch }) {

  return (
    <div className="navbar">

      <h2>Dashboard</h2>

      <input
        type="text"
        placeholder="Search Todo..."
        value={search}
        onChange={function (e) {
          setSearch(e.target.value);
        }}
      />

    </div>
  );
}

export default Navbar;