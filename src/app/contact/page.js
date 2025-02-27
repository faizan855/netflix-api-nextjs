import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";



const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We did love to hear <span> from you </span></h2>

                    <ContactForm/>
                </section>
            </div>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108875.6492360128!2d74.22313470857046!3d31.48667610853055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39190331c3ad8e89%3A0x2e6f9503b446bc96!2sPlot%2021%20L%2C%20Block%20L%20Model%20Town%2C%20Lahore!3m2!1d31.4865829!2d74.3056659!5e0!3m2!1sen!2s!4v1740648081186!5m2!1sen!2s"
                width={600} height={450} style={{border: 0}} allowFullScreen="" loading="lazy"
                className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </>
    );
};

export default Contact;