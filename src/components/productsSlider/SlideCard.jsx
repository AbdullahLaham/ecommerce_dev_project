import React from "react"
import Sdata from "../Sdata"
import Slider from "react-slick"
import '../flashDeals/localStyle.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SlideCard = ({data}) => {
  console.log('dataaaaaaaaaaaaaa', data);

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
        {data.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value?.title}</h1>
                  <p>{value?.description}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={`https://applabb.account-collection.com/${value?.image}`} className='' alt='' />
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


