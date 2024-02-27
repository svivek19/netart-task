import React from 'react';
import Logo from './asserts/logo.png';
import Award from './asserts/1.png';
import HeroImage from './asserts/2.png';
import Tools from './asserts/3.png';

const App = () => {
  return (
    <div className='main'>
      <div className='logo-section'>
        <img src={Logo} alt="brancd - l0go" />
      </div>
      <div className="body-section">
        <div className='award'>
          <img src={Award} alt="award - image" />
        </div>
        <div right-side>
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <div className='hero-img'>
            <img src={HeroImage} alt="hero image" />
          </div>
          <p>	Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div className='details'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      </div>
      <div className='tools'>
        <img src={Tools} alt="tools image" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <hr />
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>CHEMICALS & PROCESS <span>|</span> POWER WATER & WASTE WATER <span>|</span>  OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE <span>|</span> FIGHTING AGRICULTURE & RESIDENTIAL</p>
      </div>
    </div>
  )
}

export default App
