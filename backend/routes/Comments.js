const express = require('express')
const router = express.Router();

const { Comments } = require('../models')

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId
    try {
        const comments = await Comments.findAll({ where: { PostId: postId } })
        res.json(comments)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    const comment = req.body
    try {
        await Comments.create(comment)
        res.json(comment)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

module.exports = router