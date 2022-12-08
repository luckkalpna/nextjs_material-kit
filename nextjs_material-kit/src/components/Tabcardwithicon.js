import React from 'react'
import { MdFace, MdMessage } from "react-icons/md";
import { AiTwotoneTool } from "react-icons/ai";

function Tabcardwithicon() {

return (
    <div>
      <div className="tabcardwithicon-container">
          <div className='tab-profile-txt active tab-profile-txt'>I think that a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</div>

    {/*<div className='tab-message-txt tab-message-txt'>Lorem ipsum dolor sit amet         consectetur adipisicing elit. Quia, quaerat? Eligendi saepe nemo, beatae quae recusandae ea alias illum voluptatibus tempora! Molestiae vitae accusamus porro voluptatem quos obcaecati odio. Doloremque.</div>
    lorem epsum


       <div className='tab-setting-txt active tab-setting-txt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus odio, fuga veritatis libero non assumenda. Blanditiis, at commodi voluptatem in totam incidunt dicta dignissimos magnam, consectetur inventore, porro facilis? Qui animi totam ut maxime reprehenderit inventore, pariatur atque fugiat aperiam?</div> */}

      </div>
      
      <div className="navigation-tab">
        <button className='tab-profile-btn active tab-profile-btn'>
          PROFILE
          </button>
          <MdFace className='tab-profile-btn-icon'/>
        <button className='tab-message-btn active tab-message-btn'>
          MESSAGES
          </button>
          <MdMessage className='tab-message-btn-icon'/>
        <button className='tab-setting-btn active tab-setting-btn'>
          SETTINGS
          </button>
          <AiTwotoneTool className='tab-setting-btn-icon'/>
      </div>
    </div>
  )
}

export default Tabcardwithicon
