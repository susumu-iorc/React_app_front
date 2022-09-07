import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";

const Output = ({ tasks }) => {
  console.log("tasks->",tasks)
  if(tasks==null){return(<div><p>読込中</p></div>);}
  const list = tasks.map(task => {
    return (
      <h3>{task["shop-name"]}</h3>

    );
  });
  return <ul>{list}</ul>;
};


export default function Shoplist(props) {
  let shopName = props.shopList["shop"]
    
  console.log("shopname->",shopName)

    return (
        <div>
           <p>お店一覧</p>

           <Output tasks={shopName} />

        </div>
    )
}