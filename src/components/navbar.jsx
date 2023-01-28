import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate()
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "blue",
        marginTop:"0px",
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          padding: "2em",
          width: "fit-content",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Navbar
      </div>
      <div
        style={{
          padding: "2em",
          width: "fit-content",
          backgroundColor: "black",
          color: "white",
          cursor:"pointer"
        }}
        onClick={()=> navigate("/search")}
      >
        {" "}
        Search
      </div>
    </div>
  );
}

export default Navbar