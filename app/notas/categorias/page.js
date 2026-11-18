
import Link from 'next/link';

export default function CategoriasPage() {
  const categorias = [
    {
      nombre: 'Estudio',
      descripcion: 'Apuntes y temas para estudiar.',
      icono: '📚',
    },
    {
      nombre: 'Facultad',
      descripcion: 'Trabajos prácticos y actividades.',
      icono: '🎓',
    },
    {
      nombre: 'Personal',
      descripcion: 'Ideas y proyectos personales.',
      icono: '💡',
    },
  ];

  return (
    <main className="container">
      <h1>Categorías 📂</h1>

      <p className="descripcion">
        Organizá tus notas según su categoría.
      </p>

      <div className="grid">
        {categorias.map((categoria) => (
          <div className="card" key={categoria.nombre}>
            <h2>
              {categoria.icono} {categoria.nombre}
            </h2>

            <p>{categoria.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="acciones">
        <Link href="/notas" className="btn">
          Volver a mis notas
        </Link>
      </div>
    </main>
  );
}
