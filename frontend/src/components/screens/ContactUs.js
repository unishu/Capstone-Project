import React from 'react';
import { fontSize } from '@mui/system';
import { Container } from 'react-bootstrap';
import loadingPets from "../../assets/loadingPets.gif"
import Footer from '../footer/Footer';

const ContactUs = () => {
  return (
    <div>
        <div > 
          <Container> 
            <div style={{fontSize: "100px", marginTop: "100px", textAlign: "center"}}>Work in progress</div>
                <p style={{textAlign: "center"}}>This page is currently at puberty</p>
                <img src={loadingPets} style={{marginLeft: "auto", marginRight: "auto", display: "block"}}/>
          </Container>
          <Footer />
        </div>
    </div>
  )
}

export default ContactUs