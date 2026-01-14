import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './App.css'

function App() {
  return(
    <Card style={{width:300, margin:"20px auto"}}>
      <CardContent>,

        <h2>Material UI components</h2>
        <TextField label="Name"/> 
          <Button varient="contained" fullwidth>Submit</Button>
      </CardContent>
    </Card>

  )
}

export default App
