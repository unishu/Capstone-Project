import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Button, Card, CardGroup} from 'react-bootstrap'
import { Header } from '../Header'
import Footer from '../footer/Footer'
import dogImage from "../../assets/dogImage.jpg"
import bird from "../../assets/bird.jpg"
import lizard  from "../../assets/lizard.jpg"
import frenchie  from "../../assets/frenchie.jpg"
import cat from "../../assets/cat.jpg"


const Home = () => {
  return (
    
    <div className='main-home  p-0'>
       <Header />
       <br/><br/>
          <Container>
            <Row>
              <div className='intro-text text-center'>
                <div>
                <h1>Welcome to PetBook </h1>
                <h4>The digital platform to care for your pets!</h4><br/>
                <p >PETBOOK is your online pet-care platform for families with pets with features to cover all 
                  your pet-care needs. <br/>
                  Get reminders for everything, maintain wellbeing & medical records and share with your veterinarian 
                  or carer. <br/><br/>

                Join  PETBOOK today, and see what all the WOOF is about!<br/>
                Contact us at (000) 0000-0000 or send us a message through the site for more info.</p>

                </div>
                </div>
                </Row>
                <br/><br/>
                
          </Container>
                <Container >
                <Row xs={1} md={2} className="g-4">

                <Col>
          <Card>
            <Card.Img variant="top" src={frenchie} />
            <Card.Body>
              <Card.Title>Scheduling</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={cat} />
            <Card.Body>
              <Card.Title>Pet Profiles</Card.Title>
              <Card.Text>
              PetBook is designed so that each pet (or other animal) has its own unique personalized profile.  
               You can include fun details such as your pet’s breed, talents, favorite foods & toys, likes and dislikes, 
               and stuff you’d like to share about their human family members.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
        <Col>
          <Card>
            <Card.Img variant="top" src={bird} />
            <Card.Body>
              <Card.Title>Records</Card.Title>
              <Card.Text>
              Records, the place you can store everything about your pets health, Logs, Notes and Bills making 
              access more convenient.Use our templates to log any type of record, and keep everything in separate files, 
              organised and easy to find. Creating your own templates, is even an option.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={lizard} />
            <Card.Body>
              <Card.Title>Pet Profiles</Card.Title>
              <Card.Text>
               PetBook is designed so that each pet (or other animal) has its own unique personalized profile.  
               You can include fun details such as your pet’s breed, talents, favorite foods & toys, likes and dislikes, 
               and stuff you’d like to share about their human family members.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    
      
    </Row>
    <br/>
    <br/>
    <br/>

            


   
      
    </Container> <br/>
    <Footer />
   
    
    </div>
    

    
  )
}

export default Home;