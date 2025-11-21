
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col justify-between items-center'>
      <Navbar/>
      <div className="">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
