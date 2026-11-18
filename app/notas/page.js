
import Link from 'next/link';

const notas = [
  {
    id: 1,
    titulo: 'Estudiar Next.js',
    descripcion: 'Repasar rutas, componentes y layouts.',
    categoria: 'Estudio',
  },
  {
    id: 2,
    titulo: 'Tarea de Programación III',
    descripcion: 'Completar la aplicación de notas.',
    categoria: 'Facultad',
  },
  {
    id: 3,
    titulo: 'Proyecto personal',
    descripcion: 'Continuar mejorando mi portafolio.',
    categoria: 'Personal',
  },
];

export default function NotasPage() {
  return (
    <main className="container">
      <h1>Mis Notas 📚</h1>

      <p className="descripcion">
        Estas son mis notas y tareas pendientes.
      </p>

      <div className="grid">
        {notas.map((nota) => (
          <div className="card" key={nota.id}>
            <span className="categoria">
              {nota.categoria}
            </span>

            <h2>{nota.titulo}</h2>

            <p>{nota.descripcion}</p>

            <Link
              href={`/notas/${nota.id}`}
              className="btn"
            >
              Ver detalle
            </Link>
          </div>
        ))}
      </div>

      <div className="acciones">
        <Link href="/notas/categorias">
          Ver categorías
        </Link>
      </div>
    </main>
  );
}
