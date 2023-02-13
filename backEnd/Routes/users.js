const express = require('express')
const router = express.Router()

const  { 
    displayUsers,
    displayUser,
    addUsers,
    updateUser,
    deleteUser
   
} = require('../Controller/usersController')

router.route('/').get(displayUsers)
router.route('/:id').get(displayUser)
router.route('/').post(addUsers)
router.route('/:id').patch(updateUser)
router.route('/:id').delete(deleteUser)


module.exports = router