import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ShopCard } from '../components/ShopCard';


export default function Shoplist(props) {
        return (
        <div>
        <Link to="/">ホームへ</Link><br />
           <p>お店一覧</p>

           <ShopCard shops={props.shopList["shop"]} />

        </div>
    )
}