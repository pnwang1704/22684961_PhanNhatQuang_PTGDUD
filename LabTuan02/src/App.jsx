import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function reducer(state,action){
  //   switch(action.type)
  //   {
  //     case "+": return {...state, count: state.count+1};
  //     case "-": return {...state, count: state.count-1};
  //     default: return state;
  //   }

  // }
  // var [result, dispatch] = useReducer(reducer, {count:0});

  // function handleClick()
  // {
  //   dispatch({type: '+'});
  // }
  // function handleClickTru()
  // {
  //   dispatch({type: '-'});
  // }
  return (
    <>
      {/* <span>{result.count}</span>
    <button onClick={handleClick} style={{border: '1px solid red'}}>+</button>
    <button onClick={handleClickTru} style={{border: '1px solid red'}}>-</button> */}
      <div className="flex flex-col">
        <div className="flex">
          <div className='mx-10'><img src="src/Lab_02/chefify.png" alt="" /></div>
          <div><input type="text" className='search-input rounded-2xl w-60 ' /></div>
          <div ><ul className='inline-flex mx-10'>
            <li className='mx-5'>What to cook</li>
            <li className='mx-5'>Recipes</li>
            <li className='mx-5'>Ingredients</li>
            <li className='mx-5'>Occsasions</li>
            <li className='mx-5'>About Us</li>
          </ul></div>
          <div><button className='text-pink-400 bg-pink-50 w-50 mr-5 flex' ><img src="src/Lab_02/archive_check.png" alt="" className='mr-1' />Your Recipe Box</button></div>
          <div><img src="src/Lab_02/avatar.png" width={50} alt="" /></div>
        </div>
        <div className="flex mt-10">
          <div ><img src="src/Lab_02/Capture.PNG" alt=""  /></div>
          <div className="flex flex-col">
            <div className="ml flex">
              <h1 className='text-black'>Salad(32)</h1>
              <select name="" id="" className=' bg-gray-50 rounded-2xl h-10 ml-220'>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
                <option value="">High-Low</option>
                <option value="">Low-High</option>
              </select>
            </div>
            <div className="mx-40 mt-5 flex flex-col">
              <div className="flex mb-10">
                <div>
                  <a href="#" class="mr-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
                <div>
                  <a href="#" class="mr-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
                <div>
                  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
              </div>
              <div className="flex mb-10">
                <div>
                  <a href="#" class="mr-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
                <div>
                  <a href="#" class="mr-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
                <div>
                  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
              </div>
              <div className="flex">
                <div>
                  <a href="#" class="mr-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
                <div>
                  <a href="#" class="mr-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
                <div>
                  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 items-center dark:border-gray-700 hover">
                    <img src="src/Lab_02/Salad with cabbage.png" alt="" />
                    <p class="font-bold text-black">Cucumber salad, cherry tomatoes.</p>
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
