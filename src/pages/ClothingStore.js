import React, { useState } from 'react';
import './styles12.css';
import './styles11.css';
// import './styles13css';
import "./mouse.css"
import logo from "./logo.png"
import Jewellery from "./1.png"
import Jewellery2 from "./2.png"
import Jewellery3 from "./3.png"
import Jewellery4 from "./5.png"
import Jewellery5 from "./5.png"

const ClothingStore = () => {

  const allProducts = {
    women: [
      { title: 'Pink Shirt', price: '₹1000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Yellow Dress', price: '₹3000' },
    ],
    men: [
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    other: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Dresses: [
      { title: 'Red Shirt', price: '₹1000' },
      { title: 'white Dress', price: '₹3000' },
    ],
    Nordic_Looks: [
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    New_In: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Clothing: [
      { title: 'Pink Shirt', price: '₹1000' },
      { title: 'Yellow Dress', price: '₹3000' },
    ],
    Shoes: [
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    Accessories: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Streetwear: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Sports: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Gifting:[
        { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState('women');


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  
  const products = allProducts[selectedCategory];



  // mouse moveent design
  const spark = (event) =>{
    let i = document.createElement("i");
    i.style.top = (event.pageY) + "px";
    i.style.left = (event.pageX) + "px";

    i.style.scale = `${Math.random() *2+1}`;

    i.style.setProperty("--x", getTransitionValue());
    i.style.setProperty("--y", getTransitionValue());
    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
        
    }, 200);


}

const getTransitionValue = ()=>{
    return `${Math.random() * 400 - 200 }px`
}
document.addEventListener("mousemove", spark);


  return (
    <div>
      {/* Navbar 1 */}
      <header className="navbar">
        <div className="navbar-left">
        <img src={logo} alt="logo" className='logo'/>
        <input 
            type="text" 
            id="search-bar" 
            placeholder="Search here..." 
            // oninput="handleSearch(event)" 
        />
        <button>Clear</button>
        
        </div>
        <div className="navbar-right">
          <a href="#" className="icon">🌐</a>
          <a href="#" className="icon">👤</a>
          <a href="#" className="icon">❤️</a>
          <a href="#" className="icon">🛒</a>
        </div>
      </header>

      {/* Navbar 2 */}
      <header className="navbar">
        <div className="navbar-center">
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Gifting')}>Jewellery </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Nordic_Looks')}>Women Apparel</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('New_In')}>Men Apparel</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Clothing')}>Kids</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Shoes')}>Decorations</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Accessories')}>Festival</a>

        </div>
      </header>
      <hr/>
       {/* Navbar 3 */}
       <h1>Jewellery </h1>
       <header className="navbar Jewellery2">
        <div className="navbar-center ">
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Gifting')}><img src={Jewellery} alt="logo" className='Jewellery'/> Necklace  </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Nordic_Looks')}><img src={Jewellery2} alt="logo" className='Jewellery'/>Rings</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('New_In')}><img src={Jewellery3} alt="logo" className='Jewellery'/>Earrings</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Clothing')}><img src={Jewellery4} alt="logo" className='Jewellery'/>Bracelet </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Shoes')}><img src={Jewellery5} alt="logo" className='Jewellery'/>Sets</a>


        </div>
      </header>

      {/* Main Container */}
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          {/* <h2>Clothing</h2> */}
          <ul>
            <li><a href="#">Price</a>
            <div className="price-inputs">
            <div className="price-field">
                <label htmlFor="min-price">Min:</label>
                <input type="number" id="min-price" placeholder="Minimum Price"  />
            </div>
            <div className="price-field">
                <label htmlFor="max-price">Max:</label>
                <input type="number" id="max-price" placeholder="Maximum Price"  />
            </div>
        </div>
        {/* <div cla
        ss="price-output">
            Selected Range: ₹<span id="min-value">0</span> - ₹<span id="max-value">0</span>
        </div> */}
        </li>
            <li><a href="#">Customer Rating</a>
            {/* <h4>Rate Our Service</h4> */}
        <div className="stars">
        <span className="star" data-rating="1">&#9733;</span> 
    <span className="star" data-rating="2">&#9733;</span>
    <span className="star" data-rating="3">&#9733;</span>
    <span className="star" data-rating="4">&#9733;</span>
    <span className="star" data-rating="5">&#9733;</span>
        </div></li>
            <li><a href="#">Size</a>
            <div className='box'>
            <a href="#">6 </a>
            <a href="#">7 </a>
            <a href="#">8 </a>
            <a href="#">9 </a>
            <a href="#">11 </a>
                </div></li>
            <li><a href="#">Color </a>
            <div className='box'>
            <a href="#" className='color1'> </a>
            <a href="#" className='color2'> </a>
            <a href="#" className='color3'> </a>
            <a href="#" className='color4'> </a>
            </div></li>
            <li><a href="#">Material</a>
            <div className='box'>
            <a href="#">Silver </a>
            <a href="#">Gold </a>
            <a href="#">Rose gold </a>
            </div></li>
           
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          
          <div className="items-count">Jewellery  /  Necklace  </div>
          <div className="products">
            {products.map((product, index) => (
              <div key={index} className="product">
                <div className="product-img"></div>
                <h3>{product.title}</h3>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default ClothingStore;
