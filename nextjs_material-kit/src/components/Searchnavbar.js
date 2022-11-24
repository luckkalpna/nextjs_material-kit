import React from "react";
import { MdSearch } from "react-icons/md";

function Searchnavbar() {
	return (
		<div>
			<div className="search-nav-container">
				<button className="brand-btn">
					<a href="#" className="brand-btn">
						Brand
					</a>
				</button>
				<a href="#" className="brand-btn-link">
					LINK
				</a>
				<a href="#" className="brand-btn-link">
					LINK
				</a>
				<div className="search-container">
					<form action="" >
            <div className="search-bar">
            <input type="text" />
            <label>Search</label>
            <button className="search-btn">
							<MdSearch />
						</button>
            </div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Searchnavbar;
