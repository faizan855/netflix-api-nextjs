import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&offset=0&limit=25&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e79480bf95mshff75f0838ca21dcp1c4564jsn82f2e7e428f6',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    // If the API request fails or the movie ID is invalid, trigger the 404 page
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    // If no data is found, trigger the 404 page
    if (!data || data.length === 0 || !data[0].details) {
        notFound();
    }

    const main_data = data[0].details;

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}> Netflix \ <span>{main_data.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
