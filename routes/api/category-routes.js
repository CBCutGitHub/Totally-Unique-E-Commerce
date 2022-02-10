const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  //Grab all categories and include associated products
Category.findAll({
    include:[Product]
}).then(function(response){
    res.json(response)
}).catch(function(err){
    res.json(err)
})
});

router.get('/:id', (req, res) => {
    Category.findOne({where:{id: req.params.id},
        include:[Product]
    }).then(function(response){
        res.json(response)
    }).catch(function(err){
        res.json(err)
    })
});

router.post('/', (req, res) => {
    Category.create(req.body)
    .then(function(response){
        res.json(response)
})  .catch(function(err){
       res.json(err)
})
});

router.put('/:id', (req, res) => {
    Category.update(req.body,{
        where:{
            id:req.params.id
        }
        })    
    .then(function(response){
        res.json(response)
})  .catch(function(err){
       res.json(err)
})  
});

router.delete('/:id', (req, res) => {
    Category.destroy({
        where:{
            id:req.params.id
        }
        })    
    .then(function(response){
        res.json(response)
})  .catch(function(err){
       res.json(err)
}) 
});

module.exports = router;
