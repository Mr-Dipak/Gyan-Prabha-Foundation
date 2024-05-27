import { Route, RouterProvider, createBrowserRouter,createRoutesFromChildren,createRoutesFromElements } from 'react-router-dom'
import {Navbar,Footer,Hero,LogoCloud,BlogSection,GetInTouch,Testimonial,FAQ,Contact,About,Home} from './components/index'
import Layout from './Layout'
import Causes from './components/Causes/Causes'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path="/Causes" element={<Causes/>}/>
    </Route>
  )
)
function App() {


  return (
<RouterProvider router={router}/>
)
}

export default App
