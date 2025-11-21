
import img5 from '../assets/image/imgi_5_REVETEMENT SMALL.jpg'
export default function Home() {
  return (
    <div className='flex'>
      <div className='w-1/2 text-center'>
        <h1 className='text-[84.7957px] '>Fab___BRICK</h1>
        <div className="">
          <span className='w-fit border'>WALL COVERING</span>
          <span>INTERIOR DESIGN</span>
          <span>UNIQUE PIECES</span>
        </div>
      </div>

      <div className="w-1/2 ">
        <div className="">
          <img src={img5} alt="wall" className='w-full'/>
        </div>
      </div>
    </div>
  )
}
