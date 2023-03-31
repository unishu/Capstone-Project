import React from 'react'
import Container from 'react-bootstrap/Container' 

const Layout = (props) => {

    return (
      
        <Container fluid className='p-0'>
            {props.children}

        </Container>
        
    )

}

export default Layout