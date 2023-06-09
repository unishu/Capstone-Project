import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import { Button, Card, Badge, Accordion } from 'react-bootstrap'
import MainScreen from '../screens/MainScreen'
import Sidebar from '../Sidebar'
import Footer from  '../footer/Footer'
import Loading from '../services/Loading'
import "../screens/profileScreen/ProfileScreen.css"
import TaskApp from '../taskApp/TaskApp'


const MyPets = () => {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        
      fetchPets();
    }, []);

   

const auth = localStorage.getItem('user');
const navigate = useNavigate();
  // handle click event of logout button
  const handleLogout = () => {    
    localStorage.clear();
        navigate("/login")
  }


//gets list of pets
const fetchPets = async () => {
    const userInfo = JSON.parse(localStorage.getItem('user')).token;
    console.log(userInfo)
        
    let result = await fetch ('http://localhost:5000/api/pets', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo}`
        }
    })
        result = await result.json()
        setPets(result)  
    };
   

//deleting pet
const deletePet = async (id) => {
    const userInfo = JSON.parse(localStorage.getItem('user')).token;
        if (!window.confirm("Are you sure?")) {  
            return false;  
    } else {   
        setLoading(true)
        let result = await fetch(`http://localhost:5000/api/pets/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo}`
            }
        });
        result = await result.json();
        if (result){
            alert("Pet deleted");
            localStorage.removeItem('pet');
            fetchPets()
        }
    }};

    const editPet =() => {
        navigate('/update/:id')
    }

    const searchHandler = async(event) => {
        let key = event.target.value;
        console.log({key: key})
        const userInfo = JSON.parse(localStorage.getItem('user')).token;
        if (key){
            setLoading(true)
        let result = await fetch(`http://localhost:5000/api/pets/search/${key}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo}`
            }
        })
        result = await result.json()
        if (result) {
            setPets(result)
        }
    }else{
        fetchPets();
    }};


  return (
    <>
        <div className=" min-vh-100 d-flex p-0 ">  
            <Sidebar/>
            <div className=' m-auto w-50 mt-5'>   
                <MainScreen className="mt-4 mb-2" title= {`Welcome Back ${JSON.parse(auth).name}!`} > 
                    <input type="" className='search-record-box rounded w-25 p-1 mb-2 mt-5 ' placeholder=' Search Pets' 
                    onChange={searchHandler}/><br/><br/>

                    {
                        pets.map(pet => (
                            <Accordion className= "petContainer" flush key={pet._id}> 
                                <Accordion.Item eventKey="0">
                                    <Card>
                                        <Card.Header style={{display:"flex"}}>
                                            <Accordion.Header>
                                                <span>{pet.name}</span>
                                            </Accordion.Header>
                                            <div> {' '}
                                                <Button href={`/update/${pet._id}`} 
                                                className="ms-4"> 
                                                Update
                                                </Button>{' '}
                                                <Button 
                                                className='ms-2'
                                                variant="danger"
                                                onClick={() => deletePet(pet._id)}>
                                                Delete
                                                </Button>
                                            </div>
                                        </Card.Header>

                                    <Accordion.Body>
                                    <Card.Body>
                                        <h4>
                                        <Badge bg= "info">
                                        ID - {pet._id}
                                        </Badge>
                                        </h4>
                
                                        < Row className="blockquote mb-0">
                                        <p><Col 
                                        className="flex" sm= {12} md={12} lg={12}>{' '}
                                        <img className="petpic mt-2 inline-flexbox w-50" src={pet.pic} />
                                            </Col><br/>
                                            <b>Species: </b>{" "} {" "} {pet.species}<br/>
                                            <b>Breed:</b> {" "} {" "}  {pet.breed}<br/>
                                            <b>Sex: </b>{" "} {" "} {pet.sex}<br/>
                                            <b>Birthday:</b> {" "} {" "} {pet.birthday}<br/>
                                            <b>Weight:</b> {" "} {" "} {pet.weight}<br/>
                                            <b>RegistrationId:</b> {" "} {" "} {pet.registrationId}<br/>
                                        </p>

                                            <Button 
                                            variant = "primary" 
                                            className='mb-4' 
                                            href={`/petrecord/new-record/${pet._id}`}> 
                                            Add Record
                                            </Button> {' '}

                                            <Button variant= "info" className='mb-4' 
                    href= {`/petrecord/${pet._id}`} //{`/petrecords/${pet.name}/records`}
                    > View Records</Button> {' '}


                                            <Button 
                                            variant = "success" 
                                            className='mb-4' 
                                            href="/calendar"> 
                                            View Schedule
                                            </Button> {' '}

                                            <footer className='blockquote-footer'> <small> Created On - {new Date().toLocaleDateString('en-nz', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</small></footer>
                                        </Row>
                                    </Card.Body>
                                    </Accordion.Body>

                
                                    </Card>
                                </Accordion.Item>
                                <br/>
                        </Accordion>
            ))}

                <div className='mt-3 text-end'>
                    <Link to="/newpet">
                        <Button className='mb-4 '>Add Pet</Button><br></br>
                    </Link> 
                </div> 
            </MainScreen>
        </div>   
        </div><Footer />
    </>
  )
} 

export default MyPets