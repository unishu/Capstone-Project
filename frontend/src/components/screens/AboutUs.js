import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../footer/Footer'
import boston from  '../../assets/boston.png'
import { fontStyle } from '@mui/system'

const AboutUs = () => {
  return (
    <div>
        
<Container className='min-vh-100 font-link'><br/>
    <section class="section mt-4">
      <Container className='mb-4'>
        <Row>
          <Col md={6} lg={5} className='ml-auto d-flex align-items-center mt-4 mt-md-0'>  
         
            <div> 
              <h1 className='font-link mb-1' style={{ fontSize: "4rem" }}>A little about PetBook</h1>
                <h4 >A Place For You + Your Best Friend</h4><br/>

                <p>Welcome to our PetBook! Our platform is 
                  designed to help pet owners keep track of all the important details about their furry, 
                  feathered, or scaled friends in one convenient location.<br/><br/>
                  
                  With our user-friendly interface, you can easily store and access important information 
                  such as your pet's name, breed, age, weight, and medical history. You can also upload 
                  photos and create a profile for each of your pets.<br/><br/>

                  Our mission is to make pet ownership easier and more enjoyable for you by providing 
                  a secure, reliable, and user-friendly platform to store and manage all your pet 
                  information. With our website/app, you'll have peace of mind knowing that your pet's 
                  information is always accessible and up-to-date. <br/><br/>

                  Thank you for choosing our digital pet information storage website/app. We look forward 
                  to helping you keep your furry friends happy and healthy!.</p>
            </div>
            </Col>
          
          <Col md={6}>
            <div>
              <img alt="dog-image" className="img-fluid ms-5" src={boston} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   


        </Container>
        <Footer />
    </div>
  )
}

export default AboutUs