import "@/styles/galeria.css";

export const metadata = {
  title: "Galeria B&DM Abogados",
  description: "Servicios legales",
};

export default function Galeria() {
    return (
        <main class="holder">
        <div class="galeria">
            <h3>Quienes nos eligen...</h3>
            <img src="img/galeria/inmomap.jpg" alt="InmoMap"/>
            <img src="img/galeria/dipaolo.jpg" alt="Di Paolo Propiedades"/>
            <img src="img/galeria/pucciano.jpg" alt="Escribania Pucciano"/>
            <img src="img/galeria/uom.jpg" alt="UOM - San Martin"/>
            <img src="img/galeria/dimena.jpg" alt="Di Menna Propiedades"/>
            <img src="img/galeria/vitolo.jpg" alt="Aseguradora - Miguel Vitolo"/>
            <img src="img/galeria/escribania Moleon.jpg" alt="Moleon Escribania"/>

        </div>
    </main>
    )
}