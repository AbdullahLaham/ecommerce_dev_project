import { useSelect } from "@mui/base"
import React from "react"
import { useSelector } from "react-redux"
import SlideCard from "./SlideCard"
import '../flashDeals/localStyle.css';
const SliderHome = () => {
  const {sidebarData} = useSelector((state) => state?.generalReducer);
  console.log('dddd', sidebarData)
  return (
    <>
      <section className='homeSlide contentWidth '>
        <div className='container'>
          <SlideCard data={sidebarData} />
        </div>
      </section>
    </>
  )
}

export default SliderHome
