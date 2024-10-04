import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'

function SubmitOrder() {
  const navigate = useNavigate();
}

const ViewOrder = () => {

  const location = useLocation();

  return (
    <div>
      <h1>Order Summary:</h1>
    </div>
  )
}

export default ViewOrder;