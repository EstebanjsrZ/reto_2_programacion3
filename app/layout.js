
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Mis Notas | Programación III',
  description: 'Aplicación de notas desarrollada con Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            📝 Mis Notas
          </Link>

          <nav className="nav">
            <Link href="/">Inicio</Link>
            <Link href="/notas">Mis notas</Link>
            <Link href="/notas/categorias">Categorías</Link>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <p>Desarrollado por Esteban Jesús Rodríguez</p>
          <p>Programación III - ITEC Río Cuarto</p>

          <nav className="footer-nav">
            <Link href="/">Inicio</Link>
            <Link href="/notas">Mis notas</Link>
            <Link href="/notas/categorias">Categorías</Link>
          </nav>

          <p>Proyecto realizado con Next.js</p>
        </footer>
      </body>
    </html>
  );
}
