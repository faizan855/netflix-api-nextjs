import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {


    const id = curElem.summary.id;
    const type = curElem.summary.type;
    const title = curElem.title;
    const synopsis = curElem.contextualSynopsis.text;
    const imgURL = curElem.interestingMoment._342x192.webp.value.url;

    // console.log( id);
    // console.log( type);
    // console.log( title);
    // console.log( synopsis);
    // console.log( imgURL);

    // console.log("In Card Page", curElem);


    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image
                        src={curElem.interestingMoment._342x192.webp.value.url}
                        alt={title}
                        width={260}
                        height={200}
                    />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>
                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;


