import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { FaFile } from "react-icons/fa";
import axios from 'axios'
import { Button, Card, Badge, Accordion } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import MainScreen from '../screens/MainScreen'
import Sidebar from '../Sidebar'
import Footer from '../footer/Footer'

const PetRecords = () => {
    const [records, setRecords] = useState([]);
    const params = useParams()


    
    useEffect(() => {
        
      fetchRecords();
    }, []);


//gets list of pets
    const fetchRecords = async () => {
        const userInfo = JSON.parse(localStorage.getItem('user')).token;
  
        let result = await fetch ("http://localhost:5000/api/petrecords", //(`http://localhost:5000/api/petrecords/${recordId}`)
        {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo}`
        } }) 
        result = await result.json()
        localStorage.setItem("record", JSON.stringify(result))
        setRecords(result)
    };
 
//delete pet record
   const deleteRecord = async (id) => {
    const userInfo = JSON.parse(localStorage.getItem('user')).token;
    console.log(id)
    if (!window.confirm("Are you sure?")) {  
        return false;  
    } else{

    let result = await fetch(`http://localhost:5000/api/petrecords/${id}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo}`,
        }
    });
    result = await result.json();
    if (result){
        alert("Record deleted");
        localStorage.removeItem('record');
        fetchRecords()
    }
    }
};

const searchHandler = async(event) => {
    let key = event.target.value;
    const userInfo = JSON.parse(localStorage.getItem('user')).token;
    console.log({key: key})
    if (key){
    let result = await fetch(`http://localhost:5000/api/petrecords/search/${key}`, {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo}`
    }
});
    result = await result.json()
    if (result) {
        setRecords(result)
    }
}else{
    fetchRecords();
}};

  return (
    <>
    <div className=" min-vh-100 d-flex p-0 "> 
  <Sidebar />
    <Container className='min-vh-100 m-auto w-50 mt-5'> 
        <div className=' '>
            <MainScreen className="mt-4 mb-2" title= {'Pet Records'} >
            
                <input type="" className='search-record-box rounded w-20 p-1 mb-2 mt-5' placeholder='Search Record' 
                onChange={searchHandler}/><br/><br/>
        <div className=' mb-5'>

    
        {
            records.length >0 ? records.map((record, index) => (
                <Accordion flush key={record._id}> 
                    <Accordion.Item eventKey="0">
                        <Card>
                            <Card.Header style={{display:"flex"}}>
                                <Accordion.Header>
                                    <span >{record.petName}</span>
                                </Accordion.Header>
                            <div> {' '}
                                <Button 
                                href={`/petrecord/update/${record._id}`} //or {"/update/"+pet.id}
                                style={{marginLeft: "1em"}}
                                >
                                    Update 
                                </Button>{' '}
                                <Button 
                                variant="danger"
                                onClick= {() => deleteRecord(record._id)}
                                style={{marginLeft: "auto"}}
                                >
                                    Delete 
                                </Button>
                            </div>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <h4>
                                        <Badge bg= "info" style={{marginBottom: "1em"}}>
                                        Record - {record._id}
                                        </Badge>
                                    </h4>
                                    <Row blockquote className="blockquoute mb-0">
                                    <div>
                                        <h4>Vet</h4>
                                            {record.vet.map ((c, i) =>
                                        <div>
                                            <h6></h6>{c.name} 
                                            <h6></h6> {c.contact}
                                        </div>
                                    )} <hr/>
                     
                                         <h4>Health Concerns</h4>
                                            {record.healthConcerns.map ((c, i) =>
                                        <div>
                                            <h6>Allergies:</h6>{c.allergies}
                                            <h6>Medication:</h6> {c.medication}
                                            <h6>Existing Conditions:</h6> {c.exisitingConditions} 
                                            <h6>History:</h6> {c.history}
                                        </div>
                                    )} <hr/>
                    
                                            <h4>Vaccinations:</h4> {record.vaccinations}
                                            <br/><hr/>
                                            <h4>Records:</h4> <a href={record.recordImage} className="btn btn-primary stretched-link mb-4"> <FaFile/></a>
                                        </div><br/>
                                    <footer className='blockquote-footer'> Created On - {new Date().toLocaleDateString('en-nz', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</footer>
                                </Row>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>
                   <br/>
                </Accordion>
            ))
            :<h1>No Record Found</h1>
            }
        </div>
        </MainScreen>
        </div>
    </Container>
   
</div> <Footer />
</>
  )
}

export default PetRecords