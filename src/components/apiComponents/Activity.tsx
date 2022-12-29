import React, { useEffect, useState } from 'react';
import styles from "./Activity.module.css"


interface Activities {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}

// eslint-disable-next-line
const Activity = () => {
    const [act,setAct] = useState<Activities>();

    useEffect (() => {
        const getAct = async () => {
            let result = await fetch('https://www.boredapi.com/api/activity');
            let json : Activities = await result.json();
            setAct(json);
            console.log(json)
        }
        getAct();
    
     },[]) 

    return (
        <div className={styles.act}>
            <h1>Are you bored? Here is an idea</h1>
            <p>Activity: {act?.activity}</p>
            <p>Type of Activity: {act?.type}</p>
            <p>Amount of Participants: {act?.participants}</p>
            <p>Price: {act?.price}</p>
        </div>
    );
};

export default Activity;

