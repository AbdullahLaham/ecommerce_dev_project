import React from 'react';
import '../containers/FilterProducts/filter.css';
import CloseIcon from '@mui/icons-material/Close';
import { Rating } from '@mui/material';
const LeaveReviewComp = () => {
  return (
    <div >
        <div class=" max-w-[50%] mx-auto">
            <div class="modal-content">

                <div class="flex items-center justify-between ">
                    <h5 >Leave a Review</h5>
                    <button><CloseIcon /></button>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="review-subject">Subject</label>
                                <input class="form-control" type="text" id="review-subject" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="review-rating">Rating</label>
                                <Rating  />
                                
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="review-message">Review</label>
                        <textarea class="form-control" id="review-message" rows="8" required></textarea>
                    </div>
                </div>
                <div class="modal-footer button">
                    <button type="button" class="btn">Submit Review</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeaveReviewComp;