const express = require('express')
const router = express.Router();
const { Posts } = require('../models')

router.get('/', async (req, res) => {
    try {
        const listOfPosts = await Posts.findAll()
        return res.json(listOfPosts)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})
router.post('/', async (req, res) => {
    const post = req.body;
    try {
        await Posts.create(post);
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})
router.get('/byid/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Posts.findByPk(id);
        res.json(post);
    } catch (error) {
        res.status(404).jaon({ error: error.message });
    }
})


module.exports = router; 