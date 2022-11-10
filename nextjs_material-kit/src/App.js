import React from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Navbar from './Navbar'

function App() {
  return ( 
    <div className="App">
        {/* ----------------------- header --------------------- */}
      <div className="App-header">
        <img src="./nextjs_header.jpg" alt="image" />
        <div className="container">
        <div className="text-box">
          <h4 className='text'>NextJS Material Kit.</h4>
          <p className='texts'>A Badass Material Kit based on Material-UI and NextJS.</p>
        </div>
        {/* --------------------- buttons --------------------- */}
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
          <div className="symbol-heart"></div>
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
          <input type="checkbox" className="checkbox2" name="vehicle1" value="unchecked"/>
          <label for="vehicle1" className="checkbox1">Unchecked</label><br/>

          <input type="checkbox" className="checkbox2" name="vehicle2" value="checked"/>
          <label for="vehicle1" className="checkbox1">Checked</label><br/>

          <input type="checkbox" className="checkbox2" name="vehicle3" value="disabled unchecked" disabled/>
          <label for="vehicle1" className="checkbox1">Disabled Unchecked</label><br/>

          <input type="checkbox" className="checkbox2" name="vehicle3" value="disabled checked" disabled checked="true"/>
          <label for="vehicle1" className="checkbox1">Disabled Checked</label>
          </form>
          </div>

          <div className="radio">Radio Buttons
          <form action="">
          <input type="radio" className="radio2" name="fav_language" value="uncheck"/>
          <label for="select" className="radio1">First Radio</label><br />

          <input type="radio" className="radio2" name="fav_language" value="uncheck"/>
          <label for="select" className="radio1">Second Radio</label><br />

          <input type="radio" className="radio2" name="fav_language" value="uncheck" disabled/>
          <label for="select" className="radio1">Disabled Unchecked Radio</label><br />
          
          <input type="radio" className="radio2" name="fav_language" value="uncheck" disabled checked="true"/>
          <label for="select" className="radio1">Disabled Checked Radio</label>
          </form>
          </div>

          <div className="toggle">Toggle Buttons <br />
          <label className="switch toggle-txt"> Toggle is on
          <input type="checkbox"/>
          <span className="slider round"></span>
          </label> <br />
          <label className="switch toggle-txt">Toggle is off
          <input type="checkbox"/>
          <span className="slider round "></span> 
          </label>
          </div>
        </div>
        {/* ---------------progressbar & pagination------------- */}
        <div className="progresspage">
          <div className="progressbar">Progress Bar
          <div className="prgsbar1">
            <div className="prgdrk"></div>
            <div className="prglgh"></div>
          </div>
          <div className="prgsbar2">
            <div className="prg2drk"></div>
            <div className="prg2lgh"></div>
          </div>
          <div className="prgsbar3">
            <div className="prg3grn"></div>
            <div className="prg3org"></div>
            <div className="prg3red"></div>
            <div className="prg3lgh"></div>
          </div>
          </div>
          <div className="pagination">Pagination
          <Pagination count={10} color="secondary" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
