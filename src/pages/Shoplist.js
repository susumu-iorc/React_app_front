import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ShopCard } from '../components/ShopCard';


export default function Shoplist(props) {
  console.log(props.shopList["shop"])
        return (
        <div>
        <Link to="/">ホームへ</Link><br />
           <p>お店一覧</p>

           <ShopCard shops={props.shopList["shop"]} />

        </div>
    )
}