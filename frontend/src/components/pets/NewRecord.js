import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ErrorMessage from "../services/ErrorMessage";
import Loading from "../services/Loading";
import Sidebar from "../Sidebar";
import Footer from "../footer/Footer";
import axios from "axios";

export const NewRecord = () => {


    const [petName, setPetName] = useState('');
    const [address, setAddress] = useState('');
    const [vet, setVet] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [healthConcerns, setHealthConcerns] = useState('');
    const [allergies, setAllergies] = useState('');
    const [medication, setMedication] = useState('');
    const [history, setHistory] = useState('');
    const [exisitingConditions, setExistingConditions] = useState('');
    const [vaccinations, setVaccinations] = useState('');
    const [loading, setLoading] = useState(false);
    const [picMessage, setPicMessage] = useState();
    const [recordImage, setRecordImage] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate =useNavigate();
    const params = useParams();

useEffect(() => {
  getDetails();
}, [])

const getDetails = async (e) => { 
  setLoading(false)
  let result = await fetch(`http://localhost:5000/api/pets/${params.petid}`); 
  result = await result.json();
  localStorage.setItem("pet", JSON.stringify(result)) 
  console.warn(result); 

}
  const addRecord = async (e)=> {
    e.preventDefault();
    const userId= JSON.parse(localStorage.getItem('user'))._id
    const petId= JSON.parse(localStorage.getItem('pet'))._id
    const token = JSON.parse(localStorage.getItem('user')).token;
   
try {
  setLoading(true)
      let result = await fetch(`http://localhost:5000/api/petrecords/add/${params.petid}`, {
        method: "POST",
        body: JSON.stringify({ petName, vet: [{name, contact}], healthConcerns:[{allergies, medication, exisitingConditions, history }], vaccinations, userId, petId, recordImage}),
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      });
      setLoading(true)
      setSuccess ("Added successful")
      result = await result.json();
      localStorage.setItem("record", JSON.stringify(result))
      localStorage.setItem("pet", JSON.stringify(result))
      console.log(result);
      
      navigate("/petrecords")
     
    } catch (error) {   
        setError(error.response.data.message);
        setLoading(false)
      }}
        
      const upload = (pics) => {
        setPicMessage(null);
          if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/pdf") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "PetBook");
            data.append("cloud_name", "mmar");
            fetch("https://api.cloudinary.com/v1_1/mmar/image/upload", {
              method: "post",
              body: data,
            })
              .then((res) => res.json())
              .then((data) => {
                setRecordImage(data.url.toString());
                console.log(data);
                localStorage.setItem("pic", JSON.stringify(data)) 
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            return setPicMessage("Please Select an Image");
          }
        };
      
  return (
    <> 
      <div className=" min-vh-100 d-flex m-0 p-0">
        <Sidebar />
        <div className=" min-vh-100 d-flex align-items-center justify-content-center">
          <div className='ms-5 '>
            <label for="formFileMultiple" className="form-label ">Upload Documents</label><br/>
            <input 
            className='upload ' 
            type="file"
            id="formFileMultiple" 
            multiple
            accept ='application/pdf, image/png, image/jpeg'
            onChange= {(e) => {upload(e.target.files[0])}}/>
          </div>
          
          <Form className="mb-4">
            <Row className="mb-3 mt-5">
              {loading && <Loading />}
              {success && <ErrorMessage variant="success">Record added!</ErrorMessage>}
              <Form.Group as={Col} controlId="formGridBreed">
                <h5>Pet </h5>
                <Form.Label>Name</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder=""
                  className="inputBox"
                  value= {petName}  
                  onChange={(e) => {setPetName(e.target.value)}} />
              </Form.Group>
            </Row>
            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formGridBreed">
                <h5>Vet Details</h5>
                <Form.Label>Name</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder=""
                  className="inputBox"
                  value= {name}  
                  onChange={(e) => {setName(e.target.value)}} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridBreed">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Contact Details</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => {setContact(e.target.value)}} />
                </Form.Group>
              </Form.Group>
            </Row>

            <Row classname="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <h5>Health Concerns</h5>
                <Form.Label>Allergies</Form.Label>          
                  <Form.Control 
                  type="text" 
                  placeholder=""
                  className="inputBox"
                  value= {allergies}  
                  onChange={(e) => {setAllergies(e.target.value)}} />
                <Form.Label className="mt-2">Medication</Form.Label>          
                  <Form.Control 
                  type="text" 
                  placeholder=""
                  className="inputBox "
                  value= {medication}  
                  onChange={(e) => {setMedication(e.target.value)}} />
                <Form.Label className="mt-2">Existing Conditions</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder=""
                  className="inputBox"
                  value= {exisitingConditions}  
                  onChange={(e) => {setExistingConditions(e.target.value)}} />
              </Form.Group>
        

              <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>History</Form.Label>
                  <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder=""
                  value= {history}  
                  onChange={(e) => {setHistory(e.target.value)}} />
              </Form.Group>
            </Row>

            <Row classname="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Vaccination Status</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder=""
                  className="inputBox"
                  value= {vaccinations}  
                  onChange={(e) => {setVaccinations(e.target.value)}} />
              </Form.Group>
            </Row>

            <div className="text-end mt-4">
              <Button variant="primary" type="submit" className="register-btn col-sm-3" onClick={addRecord}>
              Confirm
              </Button>
            </div>
          </Form>
          
        </div>
      </div>
      <Footer />
      
  </>
  )};

    