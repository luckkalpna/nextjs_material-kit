import React from 'react'
import { useState } from "react";


function Tabplanecard() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div>
      <div className="tabplaincard-container">

        <div className={toggleState === 1 ? 'tab-home-txt active' : 'tab-home-txt'}>I think that a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</div>

        {/* <div className={toggleState === 2 ? 'tab-updates-txt ' : 'tab-updates-txt'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quaerat? Eligendi saepe nemo, beatae quae recusandae ea alias illum voluptatibus tempora! Molestiae vitae accusamus porro voluptatem quos obcaecati odio. Doloremque.</div>

<div className={toggleState === 3 ? 'tab-history-txt active' : 'tab-history-txt'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus odio, fuga veritatis libero non assumenda. Blanditiis, at commodi voluptatem in totam incidunt dicta dignissimos magnam, consectetur inventore, porro facilis? Qui animi totam ut maxime reprehenderit inventore, pariatur atque fugiat aperiam?</div> */}

      </div>

      <div className="plan-navigation-tab">
        <button className={toggleState === 1 ? 'tab-home-btn active' : 'tab-home-btn'} onClick={() => toggleTab(1)}>
          HOME
          </button>
        <button className={toggleState === 2 ? 'tab-updates-btn active' : 'tab-updates-btn'} onClick={() => toggleTab(2)}>
          UPDATES
          </button>
        <button className={toggleState === 3 ? 'tab-history-btn active' : 'tab-history-btn'} onClick={() => toggleTab(3)}>
          HISTORY
          </button>
      </div>

    </div>
  )
}

export default Tabplanecard
