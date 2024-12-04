import React, { useEffect, useState } from "react";
import "./Knowledge.scss";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";

// Backgrounds
import backgroundCertificates from '../../assets/images/backgroundCertificados.svg';
import backgroundHardSkills from '../../assets/images/backgroundHardSkills.svg';

export const Knowledge = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <main className="jd_knowledge">
            <Header />

            <section className="jd_main">
                <h2 className="jd_page_name">Conhecimentos</h2>

                
            </section>

            <Footer />
            {loading &&
                <Loading />
            }
        </main>
    )
}