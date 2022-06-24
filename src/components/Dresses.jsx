import React, { useState } from 'react'
import './Dresses.css'
import AllData from '../AllData.json'
import DressesCard from './DressesCard';

console.log(AllData);
// console.log(Data.cloths.id)

const Dresses = () => {
  const [dress, setdress] = useState([]);
  const filterProducts = (filterType) => {
    // console.log(filterType);
    switch (filterType) {
      case "feature":
        break;
      case "price_lToh":
        sortByPrice("price_lToh");
        break;
      case "price_hTol":
        sortByPrice("price_hTol");
        break;
      case "newest":
        break;
      case "bestselling":
        break;
      case "rating_hTol":
        break;
      case "aToz":
        sortByTitle("aToz");
        break;
      case "zToa":
        sortByTitle("zToa");
        break;
      default:
        break;
    }
  };

  const sortByPrice = (priceSortType) => {
    let newdress = [];
    if (priceSortType === "price_lToh") {
      // sort asc
      newdress = AllData.cloths.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    } else {
      // sort desc
      newdress = AllData.cloths.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    setdress([...newdress]);
  };
  const sortByTitle = (titleSortType) => {
    let newdress = [];
    if (titleSortType === "aToz") {
      // sort asc
      newdress = AllData.cloths.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      // sort desc
      newdress = AllData.cloths.sort((a, b) => (b.title > a.title ? 1 : -1));
    }
    setdress([...newdress]);
  };
  return (
    <div className='clothmain'>
   <p style={{textAlign:"center"}}>Dresses</p>

          <div className='cloth1'>
            <div id='cloth1child'>
              <img src="https://images.ctfassets.net/5de70he6op10/49ZN2bC1GSrPz57veyGnGu/60a4a4ff587ad34d08ff2b744baf2976/Casual_Text.jpg?w=630&q=80&fm=webp" alt="" />
            </div>
            <div id='cloth1child'>
              <img src="https://images.ctfassets.net/5de70he6op10/1DlsysSG4ETmC3G7DvKsZP/3317c0b53d59a8c33aac87d7e5ca7bf2/Party_Text.jpg?w=630&q=80&fm=webp" alt="" />
            </div>
            <div id='cloth1child'>
              <img src="https://images.ctfassets.net/5de70he6op10/5H08nws8ZSjUGkae6rDamQ/fc2ee28cd74d54788e9bca6b03bea20f/White_Text.jpg?w=630&q=80&fm=webp" alt="" />
            </div>
            <div id='cloth1child'>
              <img src="https://images.ctfassets.net/5de70he6op10/7sBhabDqL1c2zVvyXNFIf/b5fd57c71d3c45abe6582231b3d4d8c8/Wedding_Text.jpg?w=630&q=80&fm=webp" alt="" />
            </div>
            <div id='cloth1child'>
              <img src="https://images.ctfassets.net/5de70he6op10/6j7vctx8pVdBvsZ5YtxgjT/941f07ccaf581ac974413389a75e0bdc/Black_Text.jpg?w=630&q=80&fm=webp" alt="" />
            </div>
            <div id='cloth1child'>
              <img src="https://images.ctfassets.net/5de70he6op10/6aGiwPaIMLxjOfGxHhedpB/8410af29c1e4442f800dfb024dc6252b/Formal_Text.jpg?w=630&q=80&fm=webp" alt="" />
            </div>

          </div>

       <div id='sorting'>
       <div id='sort1'></div>
       <div id='sort2'>
        <div style={{display:"flex",gap:"20px"}}><h2>Dresses</h2><p  style={{paddingTop:"15px"}}>{`${2*AllData.cloths.length}products`}</p></div>
        <div> <p>sort:</p>
        <select onChange={(e) => filterProducts(e.target.value)}>
            <option value="feature">Fetured</option>
            <option value="price_lToh">Price: low to high</option>
            <option value="price_hTol">Price: high to low</option>
            <option value="newest">Newest</option>
            <option value="bestselling">Bestselling</option>
            <option value="rating_hTol">Rating: high to low</option>
            <option value="aToz">A-Z</option>
            <option value="zToa">Z-A</option>
          </select>
                  
        </div>
       
       </div>
       
       </div>



<div id='cloth2'>
  <div id='cloth2child1'></div>
  <div id='cloth2child2'>
  
    {AllData.cloths.map((item,index)=>{
     
  return <DressesCard key={item.id} item={item} />
 
 
})}

  </div>
</div>











    </div>
  )
}

export default Dresses
