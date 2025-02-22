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



    // Reference Commenting for Array Hararchy to console log

    // const id = main_data?.[0].episodeId;
    // const type = main_data?.[0].summary.type;
    // const title = main_data?.[0].title;
    // const synopsis = main_data?.[0].contextualSynopsis.text;
    // const imgURL = main_data?.[0].interestingMoment._342x192.webp.value.url;


    // console.log( "id",id);
    // console.log("Fetched Data:", main_data);

    // console.log( type);
    // console.log( title);
    // console.log( synopsis);
    // console.log( imgURL);
    // console.log( "In Movie Page main_data" , main_data);


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {

                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.episodeId} {...curElem} />
                            })

                        }
                    </div>
                </div>
            </section>
        </>);
};

export default Movie;