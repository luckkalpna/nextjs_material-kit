import React from 'react';
import './App.css';
import Navbar from './Navbar'

function App() {
  return ( 
    <div className="App">
        {/* ---------------------------header------------------------ */}
      <div className="App-header">
        <img src="./nextjs_header.jpg" alt="image" />
        <div className="container">
        <div className="text-box">
          <h4 className='text'>NextJS Material Kit.</h4>
          <p className='texts'>A Badass Material Kit based on Material-UI and NextJS.</p>
        </div>
        {/* -----------------------buttons----------------------- */}
        <div className="section">
          Basic Elements
        </div>
        <p className="btn">Buttons
          <p className="btn-txt">Pick your style</p>
        </p>
        <div className="btn-box">
          <button className='btn-default'>DEFAULT</button>
          <button className='btn-round'>ROUND</button>
          <button className='btn-icon'>
          <div className="heart"></div>
            WITH ICON</button>
          <button className='btn-symbol'>
          <div className="symbol-heart">h</div>
          </button>
          <button className='btn-simple'>SIMPLE</button>
        </div>
        <p className="btn-size">Pick your size</p>
        <div className="btn-box">
        <button className='btn-small'>SMALL</button>
        <button className='btn-regular'>REGULAR</button>
        <button className='btn-large'>LARGE</button>
        </div>
        <p className="btn-size">Pick your color</p>
        <div className="btn-box">
        <button className='btn-defaul'>DEFAULT</button>
        <button className='btn-primary'>PRIMARY</button>
        <button className='btn-info'>INFO</button>
        <button className='btn-success'>SUCCESS</button>
        <button className='btn-warning'>WARNING</button>
        <button className='btn-danger'>DANGER</button><br />
        <button className='btn-rose'>ROSE</button>
        </div>
        {/* ---------------------------forms------------------------------ */}
        <p className="input-txt">Inputs</p>
        <form action=""></form>
        {/* ------------check box radio button toggle mode--------- */}
        <div className="crt">
          <div className="checkbox">Checkboxes
          <form action="">
          <input type="checkbox" className="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1" className="vehicle1"> I have a bike</label><br/>

          <input type="checkbox" className="vehicle1" name="vehicle2" value="Car"/>
          <label for="vehicle1" className="vehicle1"> I have a car</label><br/>

          <input type="checkbox" className="vehicle1" name="vehicle3" value="Boat"/>
          <label for="vehicle1" className="vehicle1"> I have a boat</label><br/>

          <input type="checkbox" className="vehicle1" name="vehicle3" value="Boat"/>
          <label for="vehicle1" className="vehicle1"> I have a boat</label>
          </form>
          </div>

          <div className="radio">Radio Buttons
          <form action="">
          <input type="radio" name="fav_language" value="uncheck"/>
          <label for="select" className="radio1">First Radio</label><br />

          <input type="radio" name="fav_language" value="uncheck"/>
          <label for="select" className="radio1">Second Radio</label><br />

          <input type="radio" name="fav_language" value="disabled"/>
          <label for="select" className="radio1">Third Radio</label><br />
          
          <input type="radio" name="fav_language" value="uncheck"/>
          <label for="select" className="radio1">Fourth Radio</label>
          </form>
          </div>

          <div className="toggle">Toggle Buttons</div>
        </div>
        {/* ---------------progressbar & pagination------------- */}
        <div className="progresspage">
          <div className="progressbar">Progress Bar
          <div className="prgsbar1">helo</div>
          <div className="prgsbar2">world</div>
          <div className="prgsbar3">hlw</div>
          </div>
          <div className="pagination">Pagination</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
