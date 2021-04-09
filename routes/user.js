const router = require('express').Router();
const { Router } = require('express');
let User = require('../models/user.model'); //kailangan gawas sya


//home
router.route('/').get((req, res) => { // arrow function ang req and res
    User.find() // pramis sakto and send data, pag sayup error iya ihatag
        .then(user => res.json(user))//send user data from mongodb
        .catch(err => res.status(400).json('Error:' + err))//send error
})
//add
router.route('/add').post((req, res) => {

    const fullname = req.body.fullname; //request sya tas ibutang nya sa body na fullname
    const occupation = req.body.occupation;
    const email = req.body.email;
    const phone = req.body.phone;

    //instatiation 
    //adding user
    const newUser = new User({ fullname, occupation, email, phone });

    newUser.save()
        .then(user => res.json('New record added.'))

        .catch(err => res.status(400).json('Error:' + err));
});

//details 
router.route('/:id').get((req, res) => {

    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:' + err));
})

//delete
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('Record was deleted.'))
        .catch(err => res.status(400).json('Error:' + err));
})
//update
router.route('/update/:id').post((req, res) => {
    User.findById(req.params, id)
        .then(user => {
            user.fullname = req.body.fullname;
            user.occupation = req.body.occupation;
            user.email = req.body.email;
            user.phone = req.body.phone;

            user.save()
                .then(user => res.json("Record was Updated Successfully"))
                .catch(err => res.status(400).json('Error:' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
})
module.exports = router;