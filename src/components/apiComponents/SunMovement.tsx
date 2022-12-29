import { useEffect, useState } from 'react';
import styles from "./SunMovement.module.css"


interface Sun {
    results: {
        sunrise: number,
        sunset: number,
        first_light: number,
        last_light: number,
        dawn: number,
        dusk: number,
        solar_noon: number,
        golden_hour: number,
        day_length: number,
        timezone: string
    }
}

const SunMovement = () => {
    const [sun,setSun] = useState<Sun>();

    useEffect (() => {
        const getSun = async () => {
            let result = await fetch(`https://api.sunrisesunset.io/json?lat=51.219448&lng=4.402464&timezone=CET&date=today`);
            let json : Sun = await result.json();
            setSun(json);
            console.log(sun)
        }
        getSun();
    },[])


    return (
        <div className={styles.sun}>
            <h2> feiten over de dag </h2>
            <h3>Wanneer de zon stijgt: {sun?.results.sunrise}</h3>
            <h3>Vandaag zitten er zoveel uren daglicht in een dag: {sun?.results.day_length}</h3>
            <h3>Onze tijdzone: {sun?.results.timezone}</h3>
        </div>
    );
};

export default SunMovement;