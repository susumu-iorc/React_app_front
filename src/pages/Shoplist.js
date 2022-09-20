import { ShopCard } from '../components/ShopCard';
import { useEffect } from 'react';
const Shoplist = (props) => {

  return (
    <>
      <ShopCard shops={props.shopList["shop"]} userBase={props.userBase} />
    </>
  );
};
export default Shoplist