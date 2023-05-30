import React from 'react'

const MenuCard = ({menuData}) => {
   // const myStyle = {color: "red"};
  // console.log(nenuData);
  return (
    <>
    <section className="main-card--conatiner">   
  {menuData.map((currElem) =>{ const {id,name, category ,image,description } = currElem;
    return(<> <div className="card-conatiner" key={id}>
    <div className="card">
      <div className="card-body">
      <span className="card-number card-circlesubtle" >{id}</span>
      <span className="card-author subtle">{name}</span> 
      <h2  className="card-title">{name}</h2>
      <span className="card-description subtle">
       {description}
      </span>
      <div className='card-read'>Read</div>
    </div>
    <img src={image} alt="images" className='card-media' />
    <span className="card-tag subtle">Order Now</span>
   </div>
   </div>  
    </>
   );
   })}
   </section> 


    </>
  );
};

export default MenuCard;