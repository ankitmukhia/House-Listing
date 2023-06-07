import { useEffect } from 'react'
import { FETCH_HOUSES, CREATE_HOUSES } from "../../constants/constants";
import axios from "axios";

const URL = "http://10.0.2.2:5000"


export const  fetchHouses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/api/houses`);
      const houses = response.data;
      dispatch({
        type: FETCH_HOUSES,
        payload: houses,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

  export const createHome = ({ title, image, homeType, description, price, yearBuilt, address}) => {

  
  return async (dispatch) => {

     const response = await fetch(`${URL}/api/houses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title, image, homeType, description, price, yearBuilt, address
      })
     })

     const responseData = await response.json();
     

     dispatch({
        type: CREATE_HOUSES,
        payload: responseData
     })
  }
}
