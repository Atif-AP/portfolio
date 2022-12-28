import React, { useEffect } from 'react';
import axios from 'axios';

interface Crypto {
    base: string,
    currency: string,
    amount: number
}

const Load = () => {
    useEffect(() => {
        axios.get("https://api.coinbase.com/v2/prices/BTC-EUR/buy")
        .then(res => {
            let data: Crypto = res.data;
            console.log(data)
        }, error => console.log(error))
    }, [])

    return(null)
}


const CryptoAPI = () => {
    <Load/>
    return(
        <div>
            <p>Hallo</p>
        </div>
    )
}

export default CryptoAPI;