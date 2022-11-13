import React from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="App">
			{/* ---------------------- header --------------------- */}
			<div className="App-header">
				<img src="./nextjs_header.jpg" alt="image" />
				<div className="container">
					<div className="text-box">
						<h4 className="text">NextJS Material Kit.</h4>
						<p className="texts">
							A Badass Material Kit based on Material-UI and NextJS.
						</p>
					</div>
					{/* --------------------- buttons --------------------- */}
					<div className="section">Basic Elements</div>
					<p className="btn">
						Buttons
						<p className="btn-txt">Pick your style</p>
					</p>
					<div className="btn-box">
						<button className="btn-default">DEFAULT</button>
						<button className="btn-round">ROUND</button>
						<button className="btn-icon">
							<div className="heart"></div>
							WITH ICON
						</button>
						<button className="btn-symbol">
							<div className="symbol-heart"></div>
						</button>
						<button className="btn-simple">SIMPLE</button>
					</div>
					<p className="btn-size">Pick your size</p>
					<div className="btn-box">
						<button className="btn-small">SMALL</button>
						<button className="btn-regular">REGULAR</button>
						<button className="btn-large">LARGE</button>
					</div>
					<p className="btn-size">Pick your color</p>
					<div className="btn-box">
						<button className="btn-defaul">DEFAULT</button>
						<button className="btn-primary">PRIMARY</button>
						<button className="btn-info">INFO</button>
						<button className="btn-success">SUCCESS</button>
						<button className="btn-warning">WARNING</button>
						<button className="btn-danger">DANGER</button>
						<br />
						<button className="btn-rose">ROSE</button>
					</div>
					{/* ---------------------------forms------------------------------ */}
					<p className="input-txt">
						Inputs
						<div className="simple-form">
							<div className="form1">
								<form action="">
									<div className="user-box">
										<input type="text" name="" required="" />
										<label>Regular</label>
									</div>
								</form>
							</div>
							<div className="form2">
								<form action="">
									<div className="user-box">
										<input type="text" name="" required="" />
										<label>With floating label</label>
									</div>
								</form>
							</div>
							<div className="form3">
								<form action="">
									<div className="user-box">
										<input type="text" name="" required="" />
										<label>Success input</label>
									</div>
								</form>
							</div>
							<div className="form4">
								<form action="">
									<div className="user-box">
										<input type="text" name="" required="" />
										<label>Error input</label>
									</div>
								</form>
							</div>
						</div>
						<div className="icon-form">
							<div className="form1">
								<form action="">
									<div className="user-box">
										<input type="text" name="" required="" />
										<label>Error input</label>
									</div>
								</form>
							</div>
							<div className="form2">
								<form action="">
									<div className="user-box">
										<input type="text" name="" required="" />
										<label>Error input</label>
									</div>
								</form>
							</div>
						</div>
					</p>
					{/* ------------check box radio button toggle mode--------- */}
					<div className="crt">
						<div className="checkbox">
							Checkboxes
							<form action="">
								<input
									type="checkbox"
									className="checkbox2"
									name="vehicle1"
									value="unchecked"
								/>
								<label for="vehicle1" className="checkbox1">
									Unchecked
								</label>
								<br />

								<input
									type="checkbox"
									className="checkbox2"
									name="vehicle2"
									value="checked"
								/>
								<label for="vehicle1" className="checkbox1">
									Checked
								</label>
								<br />

								<input
									type="checkbox"
									className="checkbox2"
									name="vehicle3"
									value="disabled unchecked"
									disabled
								/>
								<label for="vehicle1" className="checkbox1">
									Disabled Unchecked
								</label>
								<br />

								<input
									type="checkbox"
									className="checkbox2"
									name="vehicle3"
									value="disabled checked"
									disabled
									checked="true"
								/>
								<label for="vehicle1" className="checkbox1">
									Disabled Checked
								</label>
							</form>
						</div>

						<div className="radio">
							Radio Buttons
							<form action="">
								<input
									type="radio"
									className="radio2"
									name="fav_language"
									value="uncheck"
								/>
								<label for="select" className="radio1">
									First Radio
								</label>
								<br />

								<input
									type="radio"
									className="radio2"
									name="fav_language"
									value="uncheck"
								/>
								<label for="select" className="radio1">
									Second Radio
								</label>
								<br />

								<input
									type="radio"
									className="radio2"
									name="fav_language"
									value="uncheck"
									disabled
								/>
								<label for="select" className="radio1">
									Disabled Unchecked Radio
								</label>
								<br />

								<input
									type="radio"
									className="radio2"
									name="fav_language"
									value="uncheck"
									disabled
									checked="true"
								/>
								<label for="select" className="radio1">
									Disabled Checked Radio
								</label>
							</form>
						</div>

						<div className="toggle">
							Toggle Buttons <br />
							<label className="switch toggle-txt">
								{" "}
								Toggle is on
								<input type="checkbox" />
								<span className="slidert round"></span>
							</label>{" "}
							<br />
							<label className="switch toggle-txt">
								Toggle is off
								<input type="checkbox" />
								<span className="slidert round "></span>
							</label>
						</div>
					</div>
					{/* ---------------progressbar & pagination------------- */}
					<div className="progresspage">
						<div className="progressbar">
							Progress Bar
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
						<div className="pagination">Pagination</div>
					</div>
					<div className="slider-budges">
						<div className="box">
							Slider
							<div className="slidercontainer">
								<input
									type="range"
									min="1"
									max="100"
									value="1"
									id="myRange"
									className="slider"
								/>
							</div>
						</div>
						<div className="budges">
							Budges
							<div className="budges-box">
								<div className="bdg-default">DEFAULT</div>
								<div className="bdg-primary">PRIMARY</div>
								<div className="bdg-info">INFO</div>
								<div className="bdg-success">SUCCESS</div>
								<div className="bdg-warning">WARNING</div>
								<div className="bdg-danger">DANGER</div>
								<div className="bdg-rose">ROSE</div>
							</div>
						</div>
					</div>
					<div className="menu-icon">
						<Navbar />
						<div className="menuwithicon"></div>
					</div>
					<div className="notifications">
						<p>Notifications</p>
						<div className="alert">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold> 
              <p className="closebtn">Indicates a dangerous or potentially
							negative action.</p>
						</div>
						<div className="success">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold> 
              <p className="closebtn">Indicates a dangerous or potentially
							negative action.</p>
						</div>
						<div className="info">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold> 
              <p className="closebtn">Indicates a dangerous or potentially negative action.</p>
						</div>
						<div className="warning">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold>
              <p className="closebtn">Indicates a dangerous or potentially
							negative action.</p>
						</div>
					</div>
          <div className="typographycontainer">Typography
          <div className="typography1">
            <div className="header1">Header 1</div>
            <div className="headertxt1">The Life of Material Kit</div>
          </div>
          <div className="typography2">
            <div className="header2">Header 2</div>
            <div className="headertxt2">The Life of Material Kit</div>
          </div>
          <div className="typography3">
            <div className="header3">Header 3</div>
            <div className="headertxt3">The Life of Material Kit</div>
          </div>
          <div className="typography4">
            <div className="header4">Header 4</div>
            <div className="headertxt4">The Life of Material Kit</div>
          </div>
          <div className="typography5">
            <div className="header5">Header 5</div>
            <div className="headertxt5">The Life of Material Kit</div>
          </div>
          <div className="typography6">
            <div className="header6">Header 6</div>
            <div className="headertxt6">The Life of Material Kit</div>
          </div>
          <div className="typography7">
            <div className="heading1">Heading 1</div>
            <div className="headingtxt1">The Life of Material Kit</div>
          </div>
          <div className="typography8">
            <div className="heading2">Heading 2</div>
            <div className="headingtxt2">The Life of Material Kit</div>
          </div>
          <div className="typography9">
            <div className="heading3">Heading 3</div>
            <div className="headingtxt3">The Life of Material Kit</div>
          </div>
          <div className="typography10">
            <div className="heading4">Heading 4</div>
            <div className="headingtxt4">The Life of Material Kit</div>
          </div>
          <div className="typography11">
          <div className="paragraph">Paragraph</div>
          <p className="para">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
          </div>
          <div className="typography12">
            <div className="muted">Muted Text</div>
            <div className="mutedtxt">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</div>
          </div>
          <div className="typography13">
            <div className="primary">Primary Text</div>
            <div className="primarytxt">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</div>
          </div>
          <div className="typography14">
            <div className="infoh">Info Text</div>
            <div className="infotxt">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</div>
          </div>
          <div className="typography15">
            <div className="suces">Success Text</div>
            <div className="sucestxt">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</div>
          </div>
          <div className="typography16">
            <div className="warn">Warning Text</div>
            <div className="warntxt">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</div>
          </div>
          <div className="typography17">
            <div className="danger">Danger Text</div>
            <div className="dangertxt">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</div>
          </div>
          <div className="typography18">
            <div className="smalltag">Small Tag</div>
            <div className="smalltagtxt">
              <p className="smalltxt1">Header with small subtitle</p>
              <p className="smalltxt2">Header with small subtitle</p>
              </div>
          </div>
          </div>
				</div>
			</div>
		</div>
	);
}

export default App;
