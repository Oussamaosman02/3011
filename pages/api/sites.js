// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sitios = [
  {
    link: 'https://3011.site',
    name: '3011',
    desc: 'Muro de webs hechas por mi',
  },
  {
    link: 'https://astro.3011.site',
    name: '3011 Astro',
    desc: 'Webs hechas por mi',
  },
  {
    link: 'https://genio.me',
    name: 'Genio Me',
    desc: 'Recursos para desarrolladores',
  },
  {
    link: 'https://notitia.cat',
    name: 'Notitia',
    desc: 'Web de información e investigación propia',
  },
  {
    link: 'https://asier.creal.es',
    name: 'Asier',
    desc: 'PWA para manejar una clase o grupo de personas',
  },
  {
    link: 'https://homosapiens.site',
    name: 'Nostradamus',
    desc: 'Predicciones de Nostradamus año a año',
  },
  {
    link: 'https://tonyashoes.creal.store',
    name: 'Tonyashoes (CReal)',
    desc: 'Tienda de zapatos personalizables (3D)',
  },
  {
    link: 'https://creal.store',
    name: 'CReal Store (CReal)',
    desc: 'Portal de tiendas de Ciudad real',
  },
  {
    link: 'https://tonias.creal.store',
    name: 'Tonias (CReal)',
    desc: 'Tienda de ropa administrada en CReal Store',
  },
  {
    link: 'https://homosapiens.website',
    name: 'Libros',
    desc: 'Web de libros que he leído o quiero leer',
  },
  {
    link: 'https://js.3011.site',
    name: 'Terminal JavaScript',
    desc: 'Terminal web para usar JavaScript',
  },
  {
    link: 'https://www.mejoressmartphones.online',
    name: 'Mejores Smartphones',
    desc: 'Mejores Smartphones por categorías',
  },
  {
    link: 'https://podcas.website',
    name: 'Podcas',
    desc: 'Todo sobre podcasts',
  },
  {
    link: 'https://www.miseo.cf',
    name: 'MiSeo',
    desc: 'SEO estrategias y trucos',
  },
  {
    link: 'https://www.creadordigital0.com',
    name: 'Creador Digital 0',
    desc: 'Web para subir creaciones digitales',
  },
  {
    link: 'https://voteu.tk',
    name: 'Vote Ú',
    desc: 'Web para votar cosas',
  },
  {
    link: 'https://homosapiens.fun',
    name: 'Homosapiens Fun',
    desc: 'Web de la plantilla del Barça',
  },
  {
    link: 'https://ijotaka.es',
    name: 'IJotaKa ES',
    desc: 'Web de Agencia digital internacional ES',
  },
  {
    link: 'https://encuestas.fun',
    name: 'Encuestas Fun',
    desc: 'Web de encuestas',
  },
  {
    link: 'https://ijotaka.com',
    name: 'IJotaKa COM',
    desc: 'Web de Agencia digital internacional',
  },
  {
    link: 'https://tiktokbreach.netlify.app',
    name: 'TikTok Breach',
    desc: 'Información sobre la falsa filtración de TikTok',
  },
  {
    link: 'https://creal.es',
    name: 'CReal',
    desc: 'Conectar a los jóvenes de Ciudad real',
  },
  {
    link: 'https://nextjs-push.vercel.app',
    name: 'Notificaciones NextJs',
    desc: 'prueba de notificaciones push en Next Js',
  },
  {
    link: 'https://terminal.3011.site',
    name: 'Web like Terminal',
    desc: 'Web con interfaz de terminal',
  },
  {
    link: 'https://sad-resumenes-md.vercel.app',
    name: 'Resúmenes SAD',
    desc: 'Resúmenes de la asignatura SAD',
  },
  {
    link: 'https://velta.es',
    name: 'Juego 3D',
    desc: 'Landing Page de un juego 3D',
  },
  {
    link: 'https://astro-ejemplo.3011.site',
    name: 'Astro Ejemplo',
    desc: 'Ejemplo de Astro consumiendo un par de APIs',
  },
];
export default function handler(req, res) {
  res.status(200).json(sitios);
}
