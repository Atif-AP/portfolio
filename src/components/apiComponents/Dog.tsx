import React from 'react';
import { useState,useEffect } from 'react';
import styles from "./Dog.module.css"

interface Dogs {
    fileSizeBytes: number,
    url: string;
}

// eslint-disable-next-line
const Dog = () => {


    const [info,setInfo] = useState<Dogs>();

    useEffect (() => {
        const getInfo = async () => {
            let result = await fetch('https://random.dog/woof.json');
            let json : Dogs = await result.json();
            setInfo(json);
            console.log(json)
        }
        getInfo();
    
     },[])

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className={styles.dogs}>
            <h1>Relax and look at dogs</h1>
            <img src={info?.url} alt="" width={400}/>
            <button onClick={refreshPage} className={styles.dogButton}>Refresh for new dog</button>
        </div>
    );
};

export default Dog;