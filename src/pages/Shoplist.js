import React, { useState } from 'react'
import { Link } from "react-router-dom";
const ShopCard = ({ shops }) => {
  if(shops==null){return(<div><p>読込中</p></div>);}
  const list = shops.map(shop => {
    let shopLink = "/shop/" + shop["place-id"]
    return (
      <div>
        <Link to= {shopLink}>
        <h3>{shop["shop-name"]}</h3>
        <p>{shop["shop-address"]}</p>
        </Link>
      </div>
    );
  });
  return list;
};


export default function Shoplist(props) {
  let shopName = props.shopList["shop"]
    
  console.log("shopname->",shopName)

    return (
        <div>
        <Link to="/">ホームへ</Link><br />
           <p>お店一覧</p>

           <ShopCard shops={shopName} />

        </div>
    )
}