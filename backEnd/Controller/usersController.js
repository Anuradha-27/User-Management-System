const express = require('express')
const fs = require('fs')
const app = express()
const validator = require("validator");

app.use(express.json())

// const { v4: uuidv4 } = require('uuid');
const {
    getAllUsersService,
    getUserService,
    deleteUserService,
    addUserService,
    updateUserService

} = require("../Service/userService");


exports.addUsers = (req,res) => {
    var serviceResponse = addUserService(req.body);
    res.send(serviceResponse);
}
exports.displayUsers = (req, res) => {
    var serviceResponse = getAllUsersService;
    res.status(200).send(serviceResponse());
  };

  exports.displayUser=((req, res) => {
    var serviceResponse = getUserService(req.params.id);
    
    res.status(200).send(serviceResponse);
  }   
  )

 exports.updateUser=((req,res) => {
    var serviceResponse = updateUserService(req.params.id,req.body);
    res.send(serviceResponse);
 })

  
  exports.deleteUser=( (req, res) => {
    var serviceResponse = deleteUserService(req.params.id);
    if(serviceResponse!==true) 
       res.send({code:400,success:false, msg: 'Id does not exist'})
    else
      res.send(serviceResponse);
    

})





