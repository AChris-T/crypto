/* eslint-disable no-unused-vars */
import React from 'react'
import founder from "../../assets/Images/founder.jpg"

const Founder = () => {
  return (
    <div className='flex justify-center mt-5 flex-col lg:px-[380px]'>
    <div className='lg:w-[500px] '>

        <img src={founder} alt="founderImage"/>
    </div>
    <div>
        <p className='text-slate-50 mt-5  text-center '>KNOWN AS DOLLAR IS THE FOUNDER OF CRYPTO UNDEADS,
         A CRYRPTO PUNK HOLDER AN ETH MAX IS IT ALL STARTED WITH A 
         TWEET FROM EARLY 2023 WHICH STATED HIS PLAN FOR LAUNCHING A
          COLLECTION ON SOL, TO BRING BACK THE BULLS IN NFTS AND ALSO 
          THE ENERGY AND POTENTIAL NFTS HOLD, SERVING AS A KEY TO BONDING, 
          BRIDGING  THE RELATIONSHIP OF COLLECTORS ON ETH AND SOL CHAIN,
           HE  LOOKS FORWARD TO WORKING WITH SOL COMMUNITIES, SO FAR IT HAS BEEN A SUCCESS
           </p>
           <a href='https://x.com/knownasdollar?s=20 ,' target='_blank' rel="noreferrer" className='text-slate-50 '>Twitter Link: <span className='text-sky-800'>https://x.com/knownasdollar?s=20 </span></a>
    </div>
    </div>
  )
}

export default Founder