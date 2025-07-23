import "@/styles/home.css";

//import Image from "next/image";
//import styles from "./page.module.css";

export default function Home() {

  return (
    <main class="holder">
           <div class="bienvenidos">
            <section class="bienvenido">
                <h3>Bienvenidos</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe perspiciatis aperiam exercitationem possimus, quibusdam repellendus quos quisquam sed cupiditate eveniet accusamus, ab odit natus esse, ea sit voluptatibus modi aliquid!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eveniet accusamus repellendus quo ex ipsa temporibus, cumque non cupiditate consectetur maxime accusantium landitiis, exercitationem quos saepe iusto iste asperiores voluptatibus!</p>
            </section>
        </div>

        <div>
            <section class="py-5 text-center">
                <div class="container">
                    <h3 class="mb-4">Nuestras Áreas De Especialización</h3>
                    <div class="row row-cols-1 row-cols-md-4 g-4">

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/civil.svg" alt="Derecho Civil" width="40">
                                </div>
                                <h5 class="card-title">Derecho Civil</h5>
                                <p class="card-text">Soluciones legales en conflictos patrimoniales, contratos y
                                    relaciones civiles.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/laboral.svg" alt="Derecho Laboral" width="40">
                                </div>
                                <h5 class="card-title">Derecho Laboral</h5>
                                <p class="card-text">Defendemos tus derechos como trabajador ante despidos, accidentes y
                                    conflictos.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/suseciones.svg" alt="Sucesiones" width="40">
                                </div>
                                <h5 class="card-title">Sucesiones</h5>
                                <p class="card-text">Asesoramos con claridad en cada paso del proceso sucesorio.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/siniestro transito.svg" alt="Siniestros de Tránsito"
                                        width="40">
                                </div>
                                <h5 class="card-title">Siniestros de Tránsito</h5>
                                <p class="card-text">Reclamamos indemnizaciones por accidentes y lesiones sufridas en el
                                    tránsito.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/danos.svg" alt="Daños" width="40">
                                </div>
                                <h5 class="card-title">Daños</h5>
                                <p class="card-text">Acciones legales por daños y perjuicios sufridos en distintos
                                    ámbitos.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/ejecuciones.svg" alt="Ejecuciones" width="40">
                                </div>
                                <h5 class="card-title">Ejecuciones</h5>
                                <p class="card-text">Recuperación de créditos mediante juicios ejecutivos y vías legales
                                    rápidas.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/desalojo.svg" alt="Desalojos" width="40">
                                </div>
                                <h5 class="card-title">Desalojos</h5>
                                <p class="card-text">Acciones legales para recuperar inmuebles ocupados o impagos.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/reajustes.svg" alt="Reajustes" width="40">
                                </div>
                                <h5 class="card-title">Reajustes Previsionales</h5>
                                <p class="card-text">Gestionamos reajustes de haberes jubilatorios y reconocimiento de
                                    derechos.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        {/* <div>
            <section class="py-5 text-center">
                <div class="container">
                    <h3 class="mb-4">Nuestras Áreas De Especialización</h3>
                    <div class="row row-cols-1 row-cols-md-4 g-4">

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/civil.svg" alt="Derecho Civil" width="40"></img>
                                </div>
                                <h5 class="card-title">Sucesiones</h5>
                                <p class="card-text">Asesoramos con claridad en cada paso del proceso sucesorio.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/laboral.svg" alt="Derecho Laboral" width="40"></img>
                                </div>
                                <h5 class="card-title">Jubilaciones Y Pensiones</h5>
                                <p class="card-text">Gestionamos tu jubilación o pensión de manera simple y rápida.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">
                                    <img src="img/assets/icons/suseciones.svg" alt="Sucesiones" width="40"></img>
                                </div>
                                <h5 class="card-title">Derecho Laboral</h5>
                                <p class="card-text">Brindamos asistencia legal para defender tus derechos laborales.
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">👨‍👩‍👧</div>
                                <h5 class="card-title">Derecho De Familia</h5>
                                <p class="card-text">Te acompañamos en la resolución de situaciones familiares.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div> */}
       
    </main >
  );
}
