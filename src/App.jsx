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
class Hero extends React.Component{
  constructor(props){
    super(props)
  }
  Page1(){
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
  Line(){
    return(
      <div className="line">
        <p>fairtrade   |   Organic   |   Climate neutral</p>
      </div>
    )
  }
  CoffeProduct(){
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
  AestheticAds(){
    return(
      <div className='aesthetic-ads'>
        
      </div>
    )
  }
  render(){
    return(
      <>
        <div className="hero">
          {this.Page1()}
          {this.Line()}
          {this.CoffeProduct()}
          {this.AestheticAds()}
        </div>
      </>
    )
  }
}

class CoffeWeb extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <>
      <WelcomeHeader/>
      <Header/>
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
