const router = require('express').Router();
const { User, Hero, Roster } = require('../../models');
const withAuth = require('../../utils/auth');
const axios = require('axios');

//gets all card assigned to user_id
router.get('/:id', async (req, res) => {
    try
    {
    const heroData = await Hero
    .findByPk(req.params.id, 
    {
    include: [{model:Hero,through:Roster,}]
    },
    fillCards(heroData)
    );
    if (!heroData) 
    {
    res.status(404).json({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
    return;
    }
    res.status(200).json(heroData);
    } 
    catch
    (err) {res.status(500).json(err)}
    });
    
    module.exports = router;
