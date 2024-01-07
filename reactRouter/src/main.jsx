import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout'
import Home from './components/Home/Home'
import About from './components/About-us/About'
import Contact from './components/Contact-us/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// 1st way

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// 2nd way

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader} 
      // it is function and loader is basically used for optimizing further you can see timestamp 7:08 chai-aur-react
      path='github' 
      element={<Github 
      />} />

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* it takes one props which is router and to create a router a has 2 ways, let's see */}
  </React.StrictMode>,
)
