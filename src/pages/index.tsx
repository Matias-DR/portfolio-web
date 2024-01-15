

export default function Home() {

  const array = Array.from(
    Array(57).keys(),
    (x: number) => x % 2 === 0 ? '400' : '300'
  )

  return <main className='w-full h-full flex justify-center items-center bg-zinc-950'>
    <div className='w-[95%] h-[95%] p-6 bg-zinc-900 border border-solid border-zinc-500 text-zinc-200'>
      <p className='text-6xl'>
        Matias Diz Rendani
      </p>
      <p className=''>
        Desarrollador Backedn & Frontend autónomo
      </p>
      <p className=''>
        Sobre mí...
      </p>
    </div>
  </main>
}
