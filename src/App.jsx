import React, { useState, Component } from 'react'
import './App.css';
import HeaderIcon from './img/header-icon.png';
import Logo1 from './img/logo-1.png';
import ImageCoffe from './img/image-coffe.png';
import TextLove from './img/text-with-love.png';
import NextButton from './img/next-button.png';
import PrevButton from './img/previous-button.png';
import Scratch  from './img/scratch.png';
import Arabica from './img/arabica-coffe.png';
import Robusta from './img/robusta-coffe.png';
import Ads from './img/ads.png';
import Star from './img/star.png';
import BlackCoffe from './img/black-coffe.png';
import BijiCoffe from './img/locate-coffe-info.png';
import Arabic from './img/arabica.png';
import ArabicaWhite from './img/arabica-white.png';
import Liberica from './img/liberica.png';


function Header(){
  const Listing = () => {
    return (
    <ul className='header-list'>
      <li>
        <p>Home</p>
        <span>
          <img src={Scratch} alt="line"/>
        </span>
      </li>
      <li>
        <p>Pages</p>
        <span>
          <img src={Scratch} alt="line"/>
        </span>
      </li>
      <li>
        <p>Shop</p>
        <span>
          <img src={Scratch} alt="line"/>
        </span>
      </li>
      <li>
        <p>Blog</p>
        <span>
          <img src={Scratch} alt="line"/>
        </span>
      </li>
    </ul>
    )
  }
  const Listing2 = ()=> {
    return (
      <>
        <ul className='header-list-2'>
          <li>
            <p>Cart(0)</p>
            <span>
          <img src={Scratch} alt="line"/>
        </span>
          </li>
          <li>
            <p>Search</p>
            <span>
          <img src={Scratch} alt="line"/>
        </span>
          </li>
        </ul>
      </>
    )
  }
  const Icon = () => {
    return (
      <div className="header-icon">
        <img src={HeaderIcon} alt="header-icon" />
      </div>
    )
  }
  return(
    <div className="header">
      <Listing/>
      <div className='header-h1'>
        <h1>Early Birds</h1>
      </div>
      <Listing2/>
      <Icon/>
    </div>
  )
}
function WelcomeHeader(){
  return(
    <div className="welcome-header">
      <p className='welcome-header-text'>Welcome to Early Birds. We Ship Every Tuesday and Thursday. Free Shipping Above $25 in The Netherlands.</p>
    </div>
  )
}
function Page1(){
  return(
    <div className='page-1'>
        <div className="page-1-image">
          <img src={ImageCoffe} alt="page-1-image"/>
        </div>
        <div className="page-1-aside">
          <div className="page-1-aside-text">
            <img src={Logo1} alt="" className='page-1-logo'/>
            <h1>ENJOY LIFE SIP BY SIP</h1>
            <img src={TextLove} alt="" className='page-1-else-text'/>
          </div>
        </div>
        <div className="prev-page-button">
          <img src={PrevButton} alt="prev-button" />
        </div>
        <div className="next-page-button">
          <img src={NextButton} alt="next-button" />
        </div>
      </div>
    )
  }
  function Line(){
    return(
      <div className="line">
        <p>fairtrade   |   Organic   |   Climate neutral</p>
      </div>
    )
  }
  function CoffeProduct(){
    return(
      <>
        <div className="coffe-product">
          <div className="coffe-product-head">
            <h1>OUR BLENDS DELIVER ON THE PROMISE OF <br />AND CONSISTENCY, ROASTED TO <br />MAXIMIZES SWEETNESS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatem nisi nihil incidunt</p>
            <a href="">View More  <span><img src={NextButton} alt="view-more" /></span></a>
          </div>
          <div className="coffe-product-arabica">
            <img src={Arabica} alt="arabica-coffe" />
            <div className="coffe-product-text">
              <h1>Arabica Bekele</h1>
              <p>$44.00</p>
            </div>
          </div>
          <div className="coffe-product-robusta">
            <img src={Robusta} alt="robusta-coffe" />
            <div className="coffe-product-text">
              <h1>Robusta Santa</h1>
              <p>$35.00</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  function AestheticAds(){
    return(
      <div className='aesthetic-ads'>
        <img src={Ads} alt="" />
      </div>
    )
  }
  function WordsCoffe(){
    return(
      <div className="words-coffe">
        <div className="words-coffe-text">
          <div className="star">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <h1>"ANOTHER REASON PEOPLE JUST CAN'T KEEP AWAY FROM <br /> THEIR LOCAL COFFE SHOP IS THE QUALITY OF COFFE <br /> THAT'S ON OFFER."</h1>
          <p>Henry Monro</p>
          <ul>
            <li>  </li>
            <li>  </li>
            <li>  </li>
          </ul>
        </div>
        <div className="words-coffe-image">
          <img src={BlackCoffe} alt="" />
        </div>
      </div>
    )
  }
  function LocateCoffe(){
    const ShopLocation = [
      {nama: "Lisbon Coffe Salon", text: 'Sunset Avenue 21 ,1102 ,Lisbon ', 
        telp: '020-7718364', day1: 'mon-fri.........6.45-3.00pm', 
        day2: 'sat-sun.........8.30-4.00pm', img: ImageCoffe},
      {nama: 'Berlin Coffe Roasterry', text: 'keikergard 50 ,921 ,Berlin ', 
        telp: '020-7718364', day1: 'mon-fri.........6.45-3.00pm', 
        day2: 'sat-sun.........8.30-4.00pm', img: BlackCoffe},
      {nama: 'Amsterdam Centre Coffe',text: 'Weteringstraat 48 ,921 ,Berlin ', 
        telp: '020-7718364', day1: 'mon-fri.........6.45-3.00pm', 
        day2: 'sat-sun.........8.30-4.00pm', img: BijiCoffe}
    ]
    const [activePage, setactivePage] = useState(0)
    const thisActivePage = (PageIndex) => {
      setactivePage(PageIndex)
    }
    const ThePage = ({active}) => {
      return(
        <div className="locate-coffe-info">
          <img src={ShopLocation[active].img} alt="" />
          <div className='locate-coffe-info-text'>
            <h1>{ShopLocation[active].nama}</h1>
            <p className='first'>{ShopLocation[active].text} <br />
              tel : {ShopLocation[active].telp} <br />
              Email : EarlyBirds@info.com</p>
            <p className='second'>{ShopLocation[active].day1} <br />
              {ShopLocation[active].day2}</p>
            <button>CONTACT US</button>
          </div>
        </div>
      )
    }
    return(
      <div className="locate-coffe">
        {ShopLocation.map((shop, index) =>(
          <>
            <div className="locate-coffe-name" onClick={() => thisActivePage(index)}>
              <h1>{shop.nama}</h1>
            </div>
            {activePage === index && <ThePage active={activePage}/>}
          </>
        ))}
      </div>
    )
  }
  function Line2(){
    return(
      <div className="line-2">
        <h1>THE COFFE THAT'S RIGHT FOR YOU</h1>
      </div>
    )
  }
  function CoffeProductFull(){
    const CoffeDetail = [
      {name: 'FRENCH ROAST', price: '$37.00', img: Arabic},
      {name: 'DECAF ESPRESSO', price: '$41.00', img: Robusta},
      {name: 'COSTA RICA', price: '$36.00', img: Liberica},
      {name: ' DECAF FRENCH ROAST', price: '$45.00', img: ArabicaWhite},
      
    ]
    return(
      <div className="coffe-product-full">
        {CoffeDetail.map((coffe)=>(
          <div className='the-product'>
            <img src={coffe.img} alt="image-of-coffe-product" />
            <div className="product-text">
              <h1>{coffe.name}</h1>
              <p>{coffe.price}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  function Hero() {
    return(
      <>
        <div className="hero">
          <Page1/>
          <Line/>
          <CoffeProduct/>
          <AestheticAds/>
          <WordsCoffe/>
          <LocateCoffe/>
          <Line2/>
          <CoffeProductFull/>
        </div>
      </>
    )
}

class CoffeWeb extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <>
      <WelcomeHeader/>
      <Header />
      <Hero/>
      </>
    )
  }
}

function App() {

  return (
    <body>
       <CoffeWeb />
    </body>
  )
}

export default App
