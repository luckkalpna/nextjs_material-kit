import React from 'react'
import { MdDashboard, MdSchedule } from 'react-icons/md';

function Verticalpill() {
return (
    <div>
      <div className="vertical-pill-nav">
        <button className='vertical-dashboard-txt'>
          <MdDashboard className='vertical-dashboard-icon' />
          DASHBOARD</button> <br />
        <button className='vertical-schedule-txt'>
          <MdSchedule className='vertical-schedule-icon' />
          SCHEDULE</button>
      </div>

      <div className="vertical-dashboard-content">
        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br />
        <br />
        Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br />
        <br />
        Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
      </div>


    </div>
  )
}

export default Verticalpill
