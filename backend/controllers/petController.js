'use strict'
const models = require("../models/");
const asyncHandler = require("express-async-handler")

//fetch all pets
const getPets = asyncHandler(
    async (req, res) => {
        const pets = await models.Pets.find({userId:req.user._id})
        console.log({userId:req.user._id})
        res.json(pets)
        console.log(pets)

 });

//register pet
 const registerPet = asyncHandler(
    async (req, res) => {
        let {name, species, breed, birthday, sex, weight, registrationId, pic, userId, address} = req.body;
        const petExists = await models.Pets.findOne({registrationId});

        if (petExists) {
        res.status(400).send({result:"Pet already exists"}) 
        //throw new Error("User already exists");
            
        }else{
            if (!name || !species || !breed || !birthday || !sex || !weight || !registrationId ){
            res.status(400)
            throw new Error ("please fill all the fields")
        }else {

            const pet = new models.Pets({name, species, breed, birthday, sex, weight, registrationId, pic, userId: req.user.id, address});
            const registeredPet = await pet.save();
            res.status(201).json(registeredPet)
        }
    }
    });

//get pet by id
    const getPetById = asyncHandler( async (req, res) =>{
        const pet = await models.Pets.findById({_id:req.params.id});
        if (pet) {
            res.json(pet);
        }else {
            res.status(404).send({message: "Pet not found"});
        }
    });

    const updatePet = asyncHandler( async (req, res) => {
        const {name, species, breed, birthday, sex, weight, registrationId, pic} = req.body;
        const pet = await models.Pets.findById({_id: req.params.id});  
    
        if(pet.userId.toString() !== req.user._id.toString()) {
            
            res.status(401);
            throw new Error ("You can't perform this action");
        } 
        if (pet) {
            pet.name = name;
            pet.species = species;
            pet.breed = breed;
            pet.birthday = birthday;
            pet.sex = sex;
            pet.weight = weight;
            pet.registrationId = registrationId;
            pet.pic = pic;

            const updatedPet = await pet.save();
            res.status(200).json(updatedPet);
        } else {
            res.status(404);
            throw new Error("Pet not found");
        }

    });

    //delete
    const deletePet = asyncHandler( async (req, res) => {
        const pet = await models.Pets.findById(req.params.id);
        if (pet.userId.toString() !== req.user._id.toString()) {
            res.status(404);
            throw new Error ("You can't perform this action");
        } 
        if (pet) {
            await pet.remove();
            res.send(req.params)
            //res.json({message: "Pet removed"})
        } else {
            res.ststaus(404);
            throw new Error("Pet not found")
        }
    });


    const searchPet = asyncHandler( async (req, res) => {
        let result = await models.Pets.find({
            "$or": [
                {
                    name: {$regex: req.params.key, '$options' : 'i'}
                },
                {
                    species: {$regex: req.params.key, '$options' : 'i'}
                },
                {
                    breed: {$regex: req.params.key, '$options' : 'i'}
                },
                {
                    sex: {$regex: req.params.key, '$options' : 'i'}
                }, 
                {
                    registrationId: {$regex: req.params.key}
                }
                
                
            ]
        });
        res.send(result)
    })

 module.exports = {getPets, registerPet, getPetById, updatePet, deletePet, searchPet}


