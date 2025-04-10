import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderItem from './components/RenderItem'
import RenderItem1 from './components/RenderItem1'

function App() {
  const [count, setCount] = useState(0)

  var array = ['What to cook', 'Recipes', 'Ingecdients', 'Occasions', 'About Us']

  var [array1, setArray1]= useState([]);

  useEffect(
    ()=> {
      var fn = fetch("https://67cd43aadd7651e464eddbc5.mockapi.io/User")
      .then((r)=>r.json()).then((d)=>{
        setArray1(d)
      })
    },[]
  )
  return (
    <>
      <div class="container">
        <div class="header" id='flex-container'>
          <div><img src="src/Lab_02/chefify.png" alt="" /></div>
          <div><input type="text" /></div>
          <div><RenderItem array={array} /></div>
          <div><button><img src="src/Lab_02/check.png" alt="" /><span id='text-button'>Your Recipe Box</span></button></div>
          <div><img src="src/Lab_02/avatar.png" alt="" /></div>
        </div>
        <div class="content">
          <div><h1>Emma Gonzalez's Recipe Box</h1></div>
          <div id='flex-container'><img src="src/Lab_02/avatar.png" alt="" height={150} />
            <span id='text-img'>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
              <p style={{ color: 'pink' }}>6.5k Subscribes
                <button>Share</button>
              </p> </span>
          </div>
          <div id='flex-container'>
              <RenderItem1 array ={array1}/>
          </div>
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
