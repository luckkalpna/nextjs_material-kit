import React from 'react';
import './App.css';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function Navbar() {
  return (
    <div>
      <nav>
      <div className="navbar">
              <button className="btn-menu" href="https://demos.creative-tim.com/nextjs-material-kit/components">Menu</button>
							<a href="#home">Home</a>
							<a href="#news">News</a>
							<div className="dropdown">
								<button className="dropbtn" onclick="myFunction()">
									Dropdown
									<i className="fa fa-caret-down"></i>
								</button>
								<div className="dropdown-content" id="myDropdown">
									<a href="#">Link 1</a>
									<a href="#">Link 2</a>
									<a href="#">Link 3</a>
								</div>
							</div>
						</div>
            </nav>
    </div>
  )
}

export default Navbar
