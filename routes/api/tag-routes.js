const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
    Tag.findAll({
        include: [{ model: Product, through: ProductTag }]
    }).then(function (response) {
        res.json(response)
    }).catch(function (err) {
        res.json(err)
    })

});

router.get('/:id', (req, res) => {
    Tag.findOne({
        where: { id: req.params.id },
        include: [{ model: Product, through: ProductTag }]
    }).then(function (response) {
        res.json(response)
    }).catch(function (err) {
        res.json(err)
    })
});

router.post('/', (req, res) => {
    Tag.create(req.body)
        .then(function (response) {
            res.json(response)

        }).catch(function (err) {
            res.json(err)
        })
});

router.put('/:id', (req, res) => {
    Tag.update(req.body,
        { where: { id: req.params.id } })
        .then(function (response) {
            res.json(response)

        }).catch(function (err) {
            res.json(err)
        })

});

router.delete('/:id', (req, res) => {
    Tag.destroy(
        { where: { id: req.params.id } })
        .then(function (response) {
            res.json(response)

        }).catch(function (err) {
            res.json(err)
        })

});

module.exports = router;
