import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import {
	FaCopy,
	FaFacebookSquare,
	FaGithub,
	FaGooglePlusG,
	FaHeart,
	FaStar,
	FaTwitter,
	FaUserFriends,
} from "react-icons/fa";
import { MdEmail, MdLock, MdOutlineCopyAll, MdOutlineCopyright } from "react-icons/md";

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
					{/* ------------------------INPUT FORM----------------------- */}
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
					{/* ---------------------- check box radio button toggle mode ------------- */}
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
								Toggle is on
								<input type="checkbox" />
								<span className="slidert round"></span>
							</label>
							<br />
							<label className="switch toggle-txt">
								Toggle is off
								<input type="checkbox" />
								<span className="slidert round "></span>
							</label>
						</div>
					</div>
					{/* -------------------- progressbar & pagination ------------------- */}

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

{/* -------------------------- SMALL NOTIFICATIONS -------------------------- */}

					<div className="menu-icon">
						<Navbar />
						<div className="menuwithicon"></div>
					</div>

					{/* -------------------------- NOTIFIACATIONS ------------------------- */}

					<div className="notifications">
						<p>Notifications</p>
						<div className="alert">
							<span className="closebtn">&times;</span>
							<bold>Danger!</bold>
							<p className="closebtn">
								Indicates a dangerous or potentially negative action.
							</p>
						</div>
						<div className="success">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold>
							<p className="closebtn">
								Indicates a dangerous or potentially negative action.
							</p>
						</div>
						<div className="info">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold>
							<p className="closebtn">
								Indicates a dangerous or potentially negative action.
							</p>
						</div>
						<div className="warning">
							<span
								className="closebtn"
								onclick="this.parentElement.style.display='none';"
							>
								&times;
							</span>
							<bold>Danger!</bold>
							<p className="closebtn">
								Indicates a dangerous or potentially negative action.
							</p>
						</div>
					</div>

					{/* ------------------------- typographycontainer ----------------------- */}

					<div className="typographycontainer">
						Typography
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
							<p className="para">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers. I understand
								culture. I am the nucleus. I think that a responsibility that I
								have, to push possibilities, to show people, this is the level
								that things could be at.
							</p>
						</div>
						<div className="typography12">
							<div className="muted">Muted Text</div>
							<div className="mutedtxt">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers...
							</div>
						</div>
						<div className="typography13">
							<div className="primary">Primary Text</div>
							<div className="primarytxt">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers...
							</div>
						</div>
						<div className="typography14">
							<div className="infoh">Info Text</div>
							<div className="infotxt">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers...
							</div>
						</div>
						<div className="typography15">
							<div className="suces">Success Text</div>
							<div className="sucestxt">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers...
							</div>
						</div>
						<div className="typography16">
							<div className="warn">Warning Text</div>
							<div className="warntxt">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers...
							</div>
						</div>
						<div className="typography17">
							<div className="danger">Danger Text</div>
							<div className="dangertxt">
								I will be the leader of a company that ends up being worth
								billions of dollars, because I got the answers...
							</div>
						</div>
						<div className="typography18">
							<div className="smalltag">Small Tag</div>
							<div className="smalltagtxt">
								<p className="smalltxt1">Use "Small" tag for the headers</p>
								<p className="smalltxt2">Header with small subtitle</p>
							</div>
						</div>
					</div>

					{/* -------------------------- IMAGE CONTAINER ------------------------- */}

					<div className="image-container">
						<div className="imagetxt">Images</div>
						<div className="imageboxtxt">
							<div className="roundetxt">Rounded Image</div>
							<div className="circletxt">Circle Image</div>
							<div className="rounderaisedtxt">Rounded Raised</div>
							<div className="circleraisedtxt">Circle Raised</div>
						</div>
						<div className="imagebox">
							<div className="rounderimage">
								<img
									src="image/profiletype.jpg"
									alt="image"
									className="rounderimage"
								/>
							</div>
							<div className="circleimage">
								<img
									src="image/profiletype.jpg"
									alt="image"
									className="circleimage"
								/>
							</div>
							<div className="rounderaisedimage">
								<img
									src="image/profiletype.jpg"
									alt="image"
									className="rounderaisedimage"
								/>
							</div>
							<div className="circleraisedimage">
								<img
									src="image/profiletype.jpg"
									alt="image"
									className="circleraisedimage"
								/>
							</div>
						</div>
					</div>

					{/* ----------------------- JavaScript Components --------------------- */}

					<div className="javascript-container">
						<div className="javascripttxt">Javascript components</div>
						<div className="modal-popove-toplist">
							<div className="modal">
								<div className="modaltxt">
									Modal
									<div className="datetimepkr">Datetime Picker</div>
									<div className="datetimepkr-light">Datetime Picker</div>
									<div className="form-with-datetime">
										<form action="">
											<label htmlfor="fname" className="datetime">
												Datetime Pick Here
											</label>
											<br />
											<input type="date" id="fname" name="fname" />
										</form>
									</div>
								</div>
								<button className="modalbtntxt">
									<FaCopy className="icon" />
									CLASSIC
								</button>
							</div>
							<div className="popovers-toplists">
								<div className="popovetxt">Popovers</div>
								<div className="popovebtns">
									<button className="pbtn1">ON LEFT</button>
									<button className="pbtn2">ON TOP</button>
									<button className="pbtn3">ON BOTTOM</button>
									<button className="pbtn4">ON RIGHT</button>
								</div>
								<div className="tooltiptxt">Tooltips</div>
								<div className="tooltipbtns">
									<button className="tbtn1">
										ON LEFT
										<span className="tooltip-text">Tooltip text</span>
									</button>
									<button className="tbtn2">
										ON TOP
										<span className="tooltip-text">Tooltip text</span>
									</button>
									<button className="tbtn3">
										ON BOTTOM
										<span className="tooltip-text">Tooltip text</span>
									</button>
									<button className="tbtn4">
										ON RIGHT
										<span className="tooltip-text">Tooltip text</span>
									</button>
								</div>
							</div>
						</div>

						{/* -------------------------- Image Slider ------------------------ */}

						<div className="carousel-box">
							<div className="carousel-txt">Carousel</div>
							<div className="carousel-image">
								<button className="prev-btn">&#8249;</button>
								<button className="next-btn">&#8250;</button>
							</div>
						</div>
						<div className="simple-txt">
							<div className="completed-txt">Completed with examples</div>
							<div className="completed-small-txt">
								The kit comes with three pre-built pages to help you get started
								faster. You can change the text and images and you're good to
								go. More importantly, looking at them will give you a picture of
								what you can build with this powerful kit.
							</div>
						</div>

						{/* ------------------ Big Image container ---------------- */}

						<div className="last-image-container">
							<div className="form-txt"></div>
							<div className="last-form">
								<div className="last-form-small-txt">Or Be Classical</div>
								<form action="">
									<div className="row1">
										<span className="last-input-icon1">
											<FaUserFriends />
										</span>
										<input type="text" />
										<label>First Name...</label>
									</div>
									<div className="row2">
										<span className="last-input-icon2">
											<MdEmail />
										</span>
										<input type="e-mail" />
										<label>Email...</label>
									</div>
									<div className="row3">
										<span className="last-input-icon3">
											<MdLock />
										</span>
										<input type="password" />
										<label>Password...</label>
									</div>
								</form>
								<div className="login-txt">GET STARTED </div>
							</div>
							<div className="last-form-icon">
								<div className="last-form-txt">Login</div>
								<div className="icon-box">
									<ul>
										<li className="icon-box-li">
											<a href="#">
												<FaTwitter />
											</a>
										</li>
										<li className="icon-box-li">
											<a href="#">
												<FaFacebookSquare />
											</a>
										</li>
										<li className="icon-box-li">
											<a href="#">
												<FaGooglePlusG />
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* <img src="image/sign.jpg" alt="image" className="last-image-container"/> */}
						</div>
						<div className="link-page-txt">
							d
							<ul className="link-page-txt">
								<a href="#" className="link-page-txt">
									VIEW LOGIN PAGE
								</a>
							</ul>
						</div>

						{/* ---------------------- LANDING TWO PAGES ----------------------   */}

						<div className="landing-two-page">
							<div className="landing-page"></div>
							<img src="image/sign.jpg" className="landing-page1" alt="image" />
							<div className="landing-page"></div>
							<img src="image/sign.jpg" className="landing-page2" alt="image" />
						</div>
						<div className="landing-two-page-txt">
							<div>
								<a href="#" className="landing-two-page-txt1">
									VIEW LANDING PAGE
								</a>
							</div>
							<div>
								<a href="#" className="landing-two-page-txt2">
									VIEW LANDING PAGE
								</a>
							</div>
						</div>
					</div>

                {/* ------------------ ENDING TEXT ------------------- */}

					<div className="ending-txt">
						<div className="love-txt">Do you love this UI Kit?</div>
						<div className="love-txt-small">
							Cause if you do, it can be yours for FREE. Hit the buttons below
							to navigate to our website where you can find the kit. We also
							have the Bootstrap 4 version on plain HTML. Start a new project or
							give an old Bootstrap project a new look!
						</div>
						<div className="box-btns">
							<button className="box-btn1">
								<a href="#" className="box-btn-a1">
									FREE NEXTJS DOWNLOAD
								</a>
							</button>
							<button className="box-btn2">
								<a href="#" className="box-btn-a2">
									FREE REACT DOWNLOAD
								</a>
							</button>
						</div>
						<div className="want-txt">Want more?</div>
						<div className="want-txt-small">
							We've just launched{" "}
							<span className="want-txt-small-span">
								NextJS Material Kit PRO
							</span>{" "}
							.It has a huge number of components, sections and example pages.
							Start Your Development With A Badass Material-UI and NexJS Kit
							inspired by Material Design.
						</div>
            <div className="last-box-btns">
							<button className="last-box-btn1">
								<a href="#" className="last-box-btn-a1">
									NEXTJS MATERIAL KIT PRO
								</a>
							</button>
							<button className="last-box-btn2">
								<a href="#" className="last-box-btn-a2">
									MATERIAL KIT PRO REACT
								</a>
							</button>
						</div>
            <div className="thank-txt">Thank you for supporting us!
            <div className="thanks-btn-box">
              <button className="tweet-btn">
                <ul className="tweet-btn-txt">
                  <li>
										<a href="#" className="tweet-btn-txt">
											<FaTwitter className="tweet-btn-txt-icon"/>TWEET
											</a>
									</li>
                </ul>
              </button>
              <button className="share-btn">
                <ul className="share-btn-txt">
                  <li>
										<a href="#" className="share-btn-txt">
											<FaFacebookSquare className="share-btn-txt-icon"/>SHARE
											</a>
									</li>
                </ul>
              </button>
              <button className="star-btn">
                <ul className="star-btn-txt">
                  <li>
										<a href="#" className="star-btn-txt">
											<FaGithub className="star-btn-txt-icon"/>STAR
											</a>
									</li>
                </ul>
              </button>
            </div>
            </div>
					</div>
				</div>

                  {/* ------------------ FOOTER PART ------------------ */}

        <footer className="footer-container">
          <div className="footer1">
            <ul className="footer-txt-1">
              <li>
                <a href="#" className="footer-txt-1">CREATIVE TIM</a>
              </li>
            </ul>
          </div>
          <div className="footer2">
            <ul className="footer-txt-2">
              <li>
                <a href="#" className="footer-txt-2">ABOUT US</a>
              </li>
            </ul>
          </div>
          <div className="footer3">
            <ul className="footer-txt-3">
              <li>
                <a href="#" className="footer-txt-3">BLOG</a>
              </li>
            </ul>
          </div>
          <div className="footer4">
            <ul className="footer-txt-4">
              <li>
                <a href="#" className="footer-txt-4">LICENSES</a>
              </li>
            </ul>
          </div>
          <div className="footer5">
          <MdOutlineCopyright className="footer-copyright-symbol"/>
            <div className="footer-txt-5">2022, made with
            <FaHeart className="footer-heart-symbol"/>by
            <span className="footer-span-txt-5">Creative Tim</span>for a better web.
            </div>
          </div>
        </footer>

			</div>
		</div>
	);
}

export default App;
