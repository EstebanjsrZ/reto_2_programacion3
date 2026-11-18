
import Link from 'next/link';
import { notFound } from 'next/navigation';

const notas = [
  {
    id: 1,
    titulo: 'Estudiar Next.js',
    contenido: 'Repasar rutas, componentes y layouts.',
  },
  {
    id: 2,
    titulo: 'Tarea de Programación III',
    contenido: 'Completar la aplicación de notas.',
  },
  {
    id: 3,
    titulo: 'Proyecto personal',
    contenido: 'Continuar mejorando mi portafolio.',
  },
];

export default async function DetalleNota({ params }) {
  const { id } = await params;

  const nota = notas.find(
    (n) => n.id === Number(id)
  );

  if (!nota) {
    notFound();
  }

  return (
    <main className="container">
      <div className="detalle">
        <h1>{nota.titulo}</h1>

        <p>Nota número: {id}</p>
        <p>{nota.contenido}</p>

        <Link href="/notas" className="btn">
          Volver a mis notas
        </Link>
      </div>
    </main>
  );
}
