
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import Samples from './pages/Samples';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

export default function App() {

  const routes = createBrowserRouter([
    {path:'/' , element: <Layout/> , children:[
      {index:true , element: <Home/>},
      {path:'*' , element:<NotFound/>},
      {path:'/projects' , element: <Projects/>},
      {path:'/about-us' , element: <AboutUs/>},
      {path:'/samples' , element: <Samples/>},
      {path:'/shop' , element: <Shop/>},
      {path:'/contact' , element: <Contact/>},
    ] }
  ])

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}
