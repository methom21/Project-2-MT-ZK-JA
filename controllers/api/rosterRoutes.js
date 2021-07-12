//  /roster/

const router = require('express').Router();
const { Hero } = require('../../models');
const withAuth = require('../../utils/auth');

//gets all card assigned to user_id
router.get('/user-roster', withAuth, async (req, res) => {
    try
    {
    // {include: [{model:User},{model:Hero,through:Roster}]},
    // fillCards(heroData)
    const postData = await Hero.findAll({
    where: 
    {
    user_id: req.session.user_id,
    },
    });
    if (!postData) 
    {
    res.status(404).json
    ({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
    return;
    }
    res.status(200).json(postData);
    } 
    catch
    (err) {res.status(500).json(err)}
    });
    
    module.exports = router;
