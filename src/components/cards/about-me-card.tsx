import Link from 'next/link'
import { useEffect, useState } from 'react'

const about = [
  'Como estudiante universitario apasionado por la informática, he explorado y desarrollado una variedad de aplicaciones utilizando diferentes lenguajes y herramientas de las que he ido adquiriendo conocimiento a lo largo de mi aprendizaje.',
  'Durante mi tiempo de programación, creé aplicaciones de escritorio adaptadas para Windows y Linux utilizando Python y la librería PySimpleGUI. Mis conocimientos en Python y esta librería surgieron en un seminario universitario sobre este lenguaje.',
  'Como comentario adicional respecto al lenguaje, actualmente me encuentro aprendiendo e implementando aplicaciones web con el framework Django.',
  'Además, desarrollé aplicaciones web que abarcaban la administración de usuarios con una estructura cliente-servidor-base de datos (web), integrando funciones como la generación de recetas de cocina basadas en ingredientes (mediante interacción con IA a través de APIs) y su vinculación a los usuarios.',
  'En el ámbito del back-end, utilicé \"mongoose\" como ORM para manejar bases de datos NoSQL en MongoDB, \"express\" para gestionar las solicitudes HTTP entre cliente y base de datos, \"jsonwebtoken\" para manejar sesiones de usuario y \"bcrypt\" para la encriptación de datos sensibles.',
  'En cuanto al front-end, empleé \"React\" y \"Next.js\" para la creación de componentes HTML, enrutamiento, interacción con APIs y bases de datos. Además, utilicé \"Bootstrap\", \"Tailwind\", \"MUI Material\" para estilizar los componentes y \"axios\" por otro lado para interactuar con APIs.',
  'En ambos ámbitos, tanto back-end como front-end, opté por utilizar Typescript y apliqué reglas definidas por \"eslint\" como estándar, adaptándolas de manera específica para Next.js para cumplir con las particularidades de este framework.',
  'GitHub',
  'freeCodeCamp',
  'A lo largo de mi camino en programación y desarrollo de aplicaciones de escritorio y web, también adquirí experiencia como Auditor en el campo de TI. Durante este tiempo, me sumergí en el uso del paquete de herramientas de Microsoft Office, especialmente en Microsoft Excel.',
  'Mi enfoque se centró en comprender los procesos empresariales, identificando riesgos potenciales y estableciendo controles para mitigarlos. Mi labor incluyó la ejecución de estos controles para evaluar la posible materialización de los riesgos identificados, así como observaciones para mejorar las definiciones de los procesos de negocio. Este aprendizaje me permitió comprender el funcionamiento interno de las empresas y sus prácticas para su mantenimiento.'
]

export default function AboutMeCard() {
  return <article className='size-full y-zinc-scrollbar'>
    <p className='w-full pb-2'>
      {about[0]}
    </p>
    <p className='w-full'>
      {about[1]}
    </p>
    <p className='w-full pb-2'>
      {about[2]}
    </p>
    <p className='w-full pb-2'>
      {about[3]}
    </p>
    <p className='w-full pb-2'>
      {about[4]}
    </p>
    <p className='w-full pb-2'>
      {about[5]}
    </p>
    <p className='w-full pb-2'>
      {about[6]}
    </p>
    <p className='w-full pb-2'>
      <Link
        className='underline'
        href='https://github.com/Matias-DR'
        target='_blank'
      >
        {about[7]}
      </Link>
    </p>
    <p className='w-full pb-2'>
      <Link
        className='underline'
        href='https://www.freecodecamp.org/Matias-DR'
        target='_blank'
      >
        {about[8]}
      </Link>
    </p>
    <p className='w-full'>
      {about[9]}
    </p>
    <p className='w-full pb-2'>
      {about[10]}
    </p>
  </article>
}