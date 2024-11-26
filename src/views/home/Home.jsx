import { Header } from '../../components/header/Header';
import './Home.scss';


export const Home = () => {
    return (
        <main className="jd_home">
            <Header />

            <section className="jd_main">
                <ul className="jd_presentation_name">
                    <li className="jd_presentation_name_item">
                        <h2 className="jd_presentation_title_one">Jobson de Oliveira Coutinho</h2>
                    </li>
                    <li className="jd_presentation_name_item">
                        <h2 className="jd_presentation_title_tow">Desenvolvedor Full-Stack</h2>
                    </li>
                </ul>
            </section>
        </main>
    )
}