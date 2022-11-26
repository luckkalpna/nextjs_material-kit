import React from 'react'
import { MdFace } from "react-icons/md";

function Tabcardwithicon() {
return (
    <div>
      <div className="tabcardwithicon-container">
        <div className='tab-profile-txt active'>I think that a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</div>
        {/* <div className="message-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quaerat? Eligendi saepe nemo, beatae quae recusandae ea alias illum voluptatibus tempora! Molestiae vitae accusamus porro voluptatem quos obcaecati odio. Doloremque.</div>
        <div className="setting-txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus odio, fuga veritatis libero non assumenda. Blanditiis, at commodi voluptatem in totam incidunt dicta dignissimos magnam, consectetur inventore, porro facilis? Qui animi totam ut maxime reprehenderit inventore, pariatur atque fugiat aperiam?</div> */}
      </div>
      <div className="navigation-tab">
        <button className='tab-profile-btn active'>
          PROFILE
        </button><MdFace className='tab-profile-btn-icon'/>
        <button className='tab-message-btn'>MESSAGES</button>
        <button className='tab-setting-btn'>SETTINGS</button>
      </div>
    </div>
  )
}

export default Tabcardwithicon
