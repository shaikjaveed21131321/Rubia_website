import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Realstate from '../realstate/realstate';
import JobPortal from '../Job_portal/jobPortal';

const Routing = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/job portal/' element={<JobPortal/>}/>
    <Route path='/real state/' element={<Realstate/>}/>
    </Routes>
    </BrowserRouter>


   </>
  )
}

export default Routing