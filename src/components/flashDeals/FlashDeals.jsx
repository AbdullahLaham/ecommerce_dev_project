import React from "react"
import FlashCard from "./FlashCard"
import "./localStyle.css"
import BoltIcon from '@mui/icons-material/Bolt';
const FlashDeals = ({products}) => {
  
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <BoltIcon />
            <p className="text-red-500 ">Flash Delas</p>
          </div>
          <FlashCard products={products} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
