import Link from 'next/link';

export default function Nav() {
  return (
    <nav>    
      <ul className="navegacion">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/nosotros">Nosotros</Link></li>
        <li><Link href="/galeria">Galeria</Link></li>
        <li><Link href="/novedades">Novedades</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}