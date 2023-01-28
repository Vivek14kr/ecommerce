import React, { useState, useEffect } from "react";
import "./IndexFinal.css"
import { useNavigate } from "react-router-dom";

function IndexFinal() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories ")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);


  const handleClick = (category)=>{


      localStorage.setItem("category", JSON.stringify(category));
      navigate("/productscategorypage")
  }
  return (
    <div
      style={{
        paddingTop: "100px",
        textAlign: "center",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="notes">
        {categories.map((category) => (
          <div onClick={()=> handleClick(category)} style={{ cursor:"pointer", border: "5px solid black", width: "20em", backgroundColor:"white", color:"black", borderRadius:"20px" }}>
            <h1>{category}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
export default IndexFinal;
