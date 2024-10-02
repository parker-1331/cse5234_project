import React from "react";
import {useLocation} from 'react-router-dom'

const ViewConfirmation = () => {

  const location = useLocation();

  return (
    <div>
      <h1>Thanks for your order!</h1>
    </div>
  )
}

export default ViewConfirmation;