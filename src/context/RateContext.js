
import axios from "axios";
import { createContext } from "react";
import { useReducer } from "react";
import rateReducer from "./RateReducer";
const RateContext = createContext();

export const RateProvider = ({children}) => {

    const initialState = {
        rate: {}
    }

    let [state, dispatch] = useReducer(rateReducer, initialState);

    const fetchRate = async () => {
        const API_KEY = "e5821caa36914fc15eea1e5b";

        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/EUR`);

        const rate = response.data.conversion_rates;
       
        dispatch({
            type: "SET_RATE",
            payload: rate
        })
        
    }

    return (<RateContext.Provider value={{
        rate: state.rate,
        fetchRate
    }}>
        {children}
    </RateContext.Provider>)
}

export default RateContext;