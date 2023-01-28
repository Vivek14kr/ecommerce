import React, { useState, useEffect } from "react";
import axios from "axios";

import "./productspage.css"
import Card from "@mui/material/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function ProductsCategoryPage() {
    const [products, setProducts] = useState([]);
   

    useEffect(() => {
      // Fetch products from API

      
    const categoryName= JSON.parse(localStorage.getItem("category"));
      axios
        .get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((res) => {
          setProducts(res.data.products);
        
        })
        .catch((err) => console.log(err));
    }, []);

  console.log(products)
  return (
    <div
      style={{
        margin: "auto",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        paddingTop: "10em",
      }}
    >
      <div
        className="notes"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.map((item) => (
          <div
            style={{
              width: "250px",
              border: "1px solid black",
              backgroundColor: "white",
              padding: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "fit-content",
                padding: "20px",
                border: "1px solid black",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "15em", height: "10em" }}
                src={item.images[0]}
                alt=""
              />
            </div>
            <div>
              {item.description}
              <br />
              <b>Item Price: {item.price}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCategoryPage;
