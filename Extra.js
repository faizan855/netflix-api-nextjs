import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";


const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 1500));

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET', headers: {
            'x-rapidapi-key': '6788a1d86emshdedb3e26ccade92p174c88jsn0e68e0ef16a1',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data?.[0].episodes;
    // const main_data = data?.[0]?.episodes || [];


    const id = main_data?.[0].summary.id;

    console.log( "id",id);
    console.log("Fetched Data:", main_data);




    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })

                        }
                    </div>
                </div>
            </section>
        </>);
};

export default Movie;