
import React, {useState, useEffect} from 'react'
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Loading from '../services/Loading';


const UpdatePet = () => {

    const [name, setName] = useState('');
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
    const [species, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [birthday, setBirthday] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [registrationId, setRegistrationId] = useState('')
    const [date, setDate] = useState(" ")
    const [loading, setLoading] = useState(false);
    const [picMessage, setPicMessage] = useState();

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      getPetDetails();
    }, [])
    
//get pet details
  const getPetDetails = async (e) => {
    console.log(params); 
   

    setLoading(false)
    let result = await fetch(`http://localhost:5000/api/pets/${params.petid}`); 
    result = await result.json();
    localStorage.setItem("pet", JSON.stringify(result)) 
    console.warn(result); 

    setName(result.name);
    setSpecies(result.species);
    setBreed(result.breed);
    setBirthday(result.birthday);
    setSex(result.sex);
    setWeight(result.weight);
    setRegistrationId(result.registrationId);
    setPic(result.pic);
  }
 
//update pet profile
  const updatePet = async (e) => {
    e.preventDefault(); 
    const token= JSON.parse(localStorage.getItem('user')).token
      
    let result =  await fetch(`http://localhost:5000/api/pets/${params.petid}`, {
      method: "PUT",
      body: JSON.stringify({name, pic, species, breed, birthday, sex, weight, registrationId}),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      }
    });
    setLoading(true)
    result = await result.json();
    localStorage.setItem("pet", JSON.stringify(result)) 
    console.log(result);
    if (result){
      alert("Pet has been updated!");
       navigate('/mypets');
       setLoading(false)
    }
   
  }
//upload pic
  const postDetails = (pics) => {
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
    
  const submitHandler = (e) => {
    e.preventDefault();
  }
    

  return (
  <> 
    <div className=" min-vh-100 d-flex m-0 p-0 ">
    <Sidebar />
   <div className="container min-vh-100 d-flex align-items-center justify-content-center">
    <Form className="" //onSubmit={handleUpdate}
    >
        <h2 className="mb-5 mt-5">Update Pet</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text"
          className="form-control mt-1"
          //className={`${}`}
         
          name="name"
          value={name}
          placeholder="e.g Jane Doe "
          onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Upload a photo</Form.Label>
          
          <input type="file" id="myFile" classname="petphoto"  onChange={(e) => postDetails(e.target.files[0])}></input>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBreed">
          <Form.Label>Species</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Pet's species"
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
          placeholder="e.g. Day Month Year"
          className="inputBox"
          value= {birthday}  
          onChange={(e) => {setBirthday(e.target.value)}} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="___" kgs
          className="inputBox"
          value= {weight}  
          onChange={(e) => {setWeight(e.target.value)}} />
        </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Registration </Form.Label>
          <Form.Control 
          type="text" 
          placeholder="registration number"
          className="inputBox"
          value= {registrationId}  
          onChange={(e) => {setRegistrationId(e.target.value)}} />
        </Form.Group>
      </Row>

      <div className="text-end mt-4">
        {loading && <Loading size={50} />}
        <Button 
          variant="primary" 
          type="submit" 
          className="register-btn col-sm-3 " 
          onClick={updatePet}
        >
          Update
        </Button>
        <Button 
          variant="danger" 
          type="submit" 
          className="register-btn col-sm-3 ms-3"
          href="/mypets" 
        
        >
        Cancel
        </Button>
      </div> 
    </Form>
    </div>
    </div>
    <br/>
  </>
  )
}

export default UpdatePet