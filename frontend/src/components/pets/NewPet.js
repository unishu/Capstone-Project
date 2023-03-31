import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Sidebar from "../Sidebar";
import Loading from "../services/Loading";
import ErrorMessage from "../services/ErrorMessage";
import axios from "axios";

export const NewPet = () => {

    const [name, setName] = useState(' ');
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
    const [species, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [birthday, setBirthday] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [registrationId, setRegistrationId] = useState('');
    const [picMessage, setPicMessage] = useState()
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    const navigate =useNavigate();


    const addPet = async (e)=> {
      e.preventDefault();
      console.warn(name, species, breed, sex, birthday, weight, registrationId, pic);
      const userId= JSON.parse(localStorage.getItem('user'))._id;
      const userAddress= JSON.parse(localStorage.getItem('user')).address;
      const token= JSON.parse(localStorage.getItem('user')).token
      console.warn({userId})
      console.warn({userAddress})

try {
      let result = await fetch("http://localhost:5000/api/pets/register", {
        method: "POST",
        body: JSON.stringify({name, pic, species, breed, birthday, sex, weight, registrationId, userId, userAddress }),
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${token}`,
        }
      });
      setLoading(true)
      setSuccess ("Added new pet")
      result = await result.json();
      console.log(result);
      localStorage.setItem("pet", JSON.stringify(result))
  
      alert("Pet has been added!")    
      setLoading(false)
      navigate("/mypets")
   
      
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false)
      }};

      const postPic = (pics) => {
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
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
              setPic(data.url.toString());
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
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
          <Form className="" //onSubmit={handleSubmit}
          >
            <h2 className="mb-5">Register new pet</h2>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Added Successfully
                </ErrorMessage>
              )}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                  <Form.Control 
                  type="text"
                  className="form-control mt-1" 
                  name="name"
                  value={name}
                  placeholder= "e.g Jane Doe "
                  onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Upload a photo</Form.Label>
                <input type="file" id="myFile" classname="petphoto" onChange={(e) => postPic(e.target.files[0])}></input>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridBreed">
              <Form.Label>Species</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Pet's breed"
                className="inputBox"
                value= {species}  
                onChange={(e) => {setSpecies(e.target.value)}} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBreed">
              <Form.Label>Breed</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Pet's breed"
                className="inputBox"
                value= {breed}  
                onChange={(e) => {setBreed(e.target.value)}} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Sex</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Pet's sex"
                className="inputBox"
                value= {sex}  
                onChange={(e) => {setSex(e.target.value)}} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBreed">
                <Form.Label>Birthday</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="Date of birth"
                  className="inputBox"
                  value= {birthday}  
                  onChange={(e) => {setBirthday(e.target.value)}} />
              </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Weight</Form.Label>
                <Form.Control 
              type="text" 
              placeholder="Pet's weight" 
              className="inputBox"
              value= {weight}  
              onChange={(e) => {setWeight(e.target.value)}} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBreed">
              <Form.Label>Registration ID</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Registration ID"
                className="inputBox"
                value= {registrationId}  
                onChange={(e) => {setRegistrationId(e.target.value)}} />
            </Form.Group>
          </Row>
      
          <div className="text-end">
            <Button variant="primary" type="submit" className="register-btn col-sm-3" onClick={addPet}>
            Register
            </Button>
          </div>
          </Form>
        </div>
      </div>
      <br/>
    </>
  );
  }

    