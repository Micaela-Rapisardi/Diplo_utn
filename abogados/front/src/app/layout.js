import "@/styles/globals.css";
import Nav from "@/components/Nav";
//import Header from '@/components/Header';

export const metadata = {
  title: "B&DM Abogados",
  description: "Servicios legales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <div className="holder">
            <img src="/img/logoB&DM.jpg" alt="Logo" width="100" />
            <h1>B&DM Abogados</h1>
          </div>
          {/*<Header/>  {/* Acá se inserta el menú */}
        </header>

        <Nav/>

        {children}

        <footer>
          <p>Derechos reservados. B&DM Abogados 2025</p>
        </footer>
      </body>
    </html>
  );
}
