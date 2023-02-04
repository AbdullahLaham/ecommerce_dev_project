import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlistItems } from '../actions/general';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const WishlistPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWishlistItems());
  });
  const {whislistItems} = useSelector((state) => state?.generalReducer);
  
  console.log('dd', whislistItems)
  return (
    <div>
        <h3 className='text-3rem text-start pl-[2rem] flex items-center gap-2'> <FavoriteBorderIcon sx={{fill: 'red', fontSize: '1.8rem', }} /> Wishlist Page</h3>
       { whislistItems.map((item) => {
            return (
                <>
                </>
            )
        })}
    </div>
    
  )
}

export default WishlistPage