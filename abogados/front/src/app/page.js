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
                                <div class="icono mb-2">📚</div>
                                <h5 class="card-title">Sucesiones</h5>
                                <p class="card-text">Asesoramos con claridad en cada paso del proceso sucesorio.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">💰</div>
                                <h5 class="card-title">Jubilaciones Y Pensiones</h5>
                                <p class="card-text">Gestionamos tu jubilación o pensión de manera simple y rápida.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 text-center p-3">
                                <div class="icono mb-2">🛠️</div>
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
        </div>
       
    </main >
  );
}
