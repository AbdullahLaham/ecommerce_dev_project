import React from "react"
import Sdata from "../Sdata"
import Slider from "react-slick"
import '../flashDeals/localStyle.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useMediaQuery } from "@mui/material";


const SlideCard = ({data}) => {
  console.log('dataaaaaaaaaaaaaa', data);
  const isMobile = useMediaQuery("(min-width: 600px)");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {data?.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                {isMobile && (
                  <div className='left'>
                    <h1>{value?.title}</h1>
                    <p>{value?.description}</p>
                    <button className='btn-primary'>Visit Collections</button>
                  </div>
                )}
                <div className='right'>
                  <img src={`https://applabb.account-collection.com/${value?.image}`} className='pt-0 mt-0' alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard


