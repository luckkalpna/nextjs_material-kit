import React from 'react'
import { FaListUl } from 'react-icons/fa'
import { MdDashboard, MdSchedule } from 'react-icons/md'

function Horizontalpillnav() {
  return (
    <div>

      <div className="horizontal-pill-nav">
        <button className='dashboard-txt'>
          <MdDashboard className='dashboard-icon' />
          DASHBOARD</button>
        <button className='schedule-txt'>
          <MdSchedule className='schedule-icon' />
          SCHEDULE</button>
        <button className='task-txt'>
          <FaListUl className='task-icon' />
          TASKS</button>
      </div>

      <div className="dashboard-content">
        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br />
        <br />
        Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br />
        <br />
        Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
      </div>

      {/* <div className="schedule-content">
      Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
      <br />
      <br />
      Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
      </div>

      <div className="task-content">
        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br />
        <br />
        Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br />
        <br />
        Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
      </div> */}

    </div>
  )
}

export default Horizontalpillnav
