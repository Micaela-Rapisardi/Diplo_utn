import "@/styles/novedades.css";

import NovedadItem from "@/components/NovedadItem";

export const metadata = {
    title: "B&DM Abogados",
    description: "Servicios legales",
};

export default function Novedades() {
    return (
        <section className="holder">
            <h2>Novedades</h2>

            <NovedadItem />
            
        </section>

    )
}