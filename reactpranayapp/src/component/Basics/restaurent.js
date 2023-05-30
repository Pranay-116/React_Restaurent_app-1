import React from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from './Navbar';


const uniqueList =[...new Set(Menu.map((currElem) => {
  return currElem.category;
})
),
"All ",
];

const restaurent = () => {
    
  const[menuData, setMenuData] = React.useState(Menu);//hooks
 // console.log(menuData);
 const[menuList, setMenuList] = React.useState(uniqueList);
 const filterItem = (category) => {
  if(category === "All"){
    setMenuData(Menu);
    return;
  }

  const updatedList = Menu.filter((currElem) => {
    return currElem.category === category;
  });
  setMenuData(updatedList);
 };
  return (
    
    <>
    <Navbar filterItemm = {filterItem} menuList = {menuList} />
    
    <MenuCard menuData = {menuData} />;//props 
    </>
  );
};

export default restaurent;