import React from 'react'

const Pricingdiv = ({item}) => {
  return (
    <div className=' relative m-4 px-10 py-7 md:max-w-[25vw] rounded-lg bg-white text-left  text-wrap border-1 border-black/20 overflow-hidden hover:border-[#00BBA6]'>
        <h1 className='font-bold mb-2 text-xl'>{item.name}</h1>
        <p className='my-4'>{item.desc}</p>
        <h4 className={`mb-2 font-bold ${item.price == "FREE" ? "text-[#00BBA6]":""} `}>{item.price}</h4>
        <ul>{item.features.map((item,index) =>{
            return <li className="mb-1">{item.icon} <span className='text-black ml-2'>{item.text}</span></li>
        })}</ul>
        <button className=' mx-1 my-4 py-2  w-full rounded-full text-white bg-[#00BBA6] hover:scale-105 transition-transform active:scale-95 active:shadow-none shadow-xl hover:shadow-2xl cursor-pointer'>See Plan</button>
    </div>
  )
}

export default Pricingdiv