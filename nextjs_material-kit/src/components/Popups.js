import React from "react";

function Popups() {
  
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  
	return (
		<div>
			<div class="popup" onclick="myFunction()">
				Click me to toggle the popup!
				<span class="popuptext" id="myPopup">
					A Simple Popup!
				</span>
			</div>
		</div>
	);
}

export default Popups;
