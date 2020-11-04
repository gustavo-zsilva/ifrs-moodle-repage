import React from 'react';
import Header from '../components/Header';

import details from '../utils/Details';

import '../styles/pages/site-home.css';

interface ActivityCardProps {
    image: string;
    title: string;
    restriction: string;

}

interface Detail {
    summary: string;
    text: string;
}

function ActivityCard({ image, title, restriction }: ActivityCardProps) {
    return (
        <div className="activity-card">
            <img src={image} alt="Card"/>
            <p className="title">{title}</p>
            <p className="restriction">{restriction}</p>
        </div>
    )
}

function SiteHome() {
    return (
        <div className="site-home">
            <Header />

            <main>
                <section className="my-courses">
                    <img src="https://moodle.ifrs.edu.br/pluginfile.php/18545/mod_label/intro/Botao%20meus%20cursos-03.jpg?time=1555528374834" alt="Meus Cursos"/>
                </section>

                <section className="activity-dashboard">
                    <p className="legend">Dashboard</p>

                    <div className="activity-cards">
                        <ActivityCard
                            image="https://moodle.ifrs.edu.br/pluginfile.php/660423/mod_label/intro/Icone-09.png"
                            title="Cursos Online Abertos"
                            restriction="Gratuitos"
                        />
            
                        <ActivityCard
                            image="https://moodle.ifrs.edu.br/pluginfile.php/660423/mod_label/intro/Icone-07.png"
                            title="Capacitação para Servidores"
                            restriction="Somente para Servidores do IFRS"
                        />
                    
                        <ActivityCard
                            image="https://moodle.ifrs.edu.br/pluginfile.php/660423/mod_label/intro/Icone-08.png"
                            title="Cursos Presenciais"
                            restriction="Somente alunos dos campi Alvorada, Rolante, Veranópolis e Viamão"
                        />
                    </div>
                </section>

                <section className="user-help">
                    <article className="questions">
                        {/* <p className="legend">Help</p> */}

                        <h2>Perguntas Frequentes</h2>

                        <ul>
                            {
                                details.map(detail => {
                                    const {summary, text}: Detail = detail;
                                    return (
                                        <details>
                                            <summary>{summary}</summary>
                                            <p className="details-text">{text}</p>
                                        </details>
                                    )
                                })
                            }
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default SiteHome;