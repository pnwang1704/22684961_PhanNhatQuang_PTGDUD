import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div class="container">
        <div class="header" id='flex-container'>
          <div><img src="src/Lab_02/chefify.png" alt="" /></div>
          <div><input type="text"/></div>
          <div><a href="#">What to cook</a><a href="#">Recipes</a><a href="#">Ingecdients</a><a href="#">Occasions</a><a href="#">About Us</a></div>
          <div><button><img src="src/Lab_02/check.png" alt="" /><span id='text-button'>Your Recipe Box</span></button></div>
          <div><img src="src/Lab_02/avatar.png" alt="" /></div>
        </div>
        <div class="menu"> <img src="src/Lab_02/menu.png" width="100%" alt="" /></div>
        <div class="content">
          <h2>Sorry, no results were found for "cakescascsa"</h2>
          <img src="src/Lab_02/nothing.png" alt="" />
          <p id='text'>We have all your Independence Day wseets covered</p>
          <p>
            <button id='btn1'>Sweet Cake</button>
            <button id='btn2'>Black Cake</button>
            <button id='btn3'>Pozole Cake</button>
            <button id='btn4'>Healthy Food</button>
            </p>
          </div>
        <div class="footer" id='flex-container'>
            <div>
                <h4>About us</h4>
                <div class="item-container">
                  Welcome to our website, a wondeful place to explore and learn how to cook like a pro.
                </div>
                <div class="item-container">
                <p><input type="text" placeholder='Enter your email' id='text-email' /></p>
                </div>
                <div class="item-container">
                  <img src="src/Lab_02/chefifywhite.png" alt="" />
                  <span>2023 Chefify Company</span>
                  <span>Terms of Service Privacy Policy</span>
                </div>
             
              </div>
            <div>
                <h4>Learn more</h4>
                <div class="item-container">
                    Our Cooks <br /> See Our Features <br />FAQ
                </div>
                <h4>Shop</h4>
                <div class="item-container">
                    Gift Subscription <br /> Send Us Feedback <br />FAQ
                </div>
              </div>
              <div>
                  <h4>Recipes</h4>
                  <div class="item-container">
                    What To Cook This Week <br />Pasta <br />Dinner <br />Healthy <br />Vegetabrian <br />Vegan <br />Christmas
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
