import { Box, Container } from '@mui/material'
import { NavBar } from './navBar'
import './index.css'

export const App = () =>  {

  return (
    <>
      <Box sx={{width:"100%", height:"100%" }} >
        <NavBar />
      </Box>

    <Container maxWidth="lg" >
      <Box sx={{width:"100%", height:"100%" }} >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo dolore iusto blanditiis minus nemo quo corrupti, a perferendis consectetur ea quae neque mollitia eveniet voluptates unde totam reiciendis vero!</h1>
      </Box>
    </Container>
    </>

  )
}
