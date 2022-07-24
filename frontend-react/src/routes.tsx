import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import {
    ChakraProvider,
    SimpleGrid,
    theme,
  } from "@chakra-ui/react"
import {Routes} from "react-router"
import HomePage from './components/HomePage';
import Form from './components/Form';
import NavBar from './components/NavBar';


export interface IRouteProps{}
const MyRoutes:React.FunctionComponent<IRouteProps> = (props)=>{
  return(
    <ChakraProvider theme={theme}> 
    <NavBar>
       <Router>
       <Routes>
       <Route path='/' element={<HomePage/>}/>
        <Route path='/cadastro' element={<Form/>}/>
        </Routes> 
       
    </Router>
    </NavBar>
    </ChakraProvider>
   
  )
}

export default MyRoutes
