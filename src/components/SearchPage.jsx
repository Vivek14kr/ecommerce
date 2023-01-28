import React from 'react'
import { useState } from 'react';
import "./SearchPage.css"
import axios from "axios";

function SearchPage() {

    const [searchInput, setSearchInput] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)


    const handleClick = ()=>{
       axios.get(`https://dummyjson.com/products/search?q=${searchInput}`)
         .then((res) => { 

          if (res.data.products.length > 0){
            setError(false)
  setProducts(res.data.products)
          }  
         else{
            setError(true)
         }
        
        })
         
    }
    console.log(products, " check ", error)

  return (
    <div
      style={
        products.length == 0 || error ==true
          ? { height: "100vh", padding: "150px" }
          : { padding: "150px" }
      }
    >
      <div
        style={{
          display: "flex",
          
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ margin: "auto", textAlign: "center" }}>
          <input
            style={{ width: "35em", height: "3em" }}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
          />
          <button style={{ height: "3.1em" }} onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      {error == false ? (
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
      ) : (
        <div
          style={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        
          }}
        >
          {" "}
          <h1>Opps ! No result Available</h1>
        </div>
      )}
    </div>
  );
}

export default SearchPage