import ItemListContainer from "../components/containers/ItemListContainer";

function Shop({productsData}) {
    return (
      <ItemListContainer productsData={productsData}/>
    );
  }
  
export default Shop;