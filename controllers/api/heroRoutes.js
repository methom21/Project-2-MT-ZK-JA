const router = require('express').Router();
const { Hero } = require('../../models');
const withAuth = require('../../utils/auth');
const axios = require('axios');
const { response } = require('express');

router.get(`/:hero`,withAuth, async (req,res)=>{
    try {
        
        const heroName = req.params.hero;
        const heroData = await axios.get(`https://superheroapi.com/api/${process.env.DB_APIKEY}/search/${heroName}`);
        res.json(heroData.data.results[0]);
        
        
    } catch (err) {
        res.status(404).json(err);
        
    }

});



//get by ID
// router.get(`/:hero`,withAuth, async (req,res)=>{
//     try {
        
//         const heroAPIid = req.params.hero;
//         const heroId = await axios.get(`https://superheroapi.com/api/${process.env.DB_APIKEY}/${heroAPIid}`);
//         res.json(heroId.data.results);
        
        
//     } catch (err) {
//         res.status(404).json(err);
        
//     }

// });



// actual route /api/heros/
router.post('/', withAuth, async (req, res) => {
try 
{
const newHero = await Hero.create
({...req.body,user_id: req.session.user_id,});
res.status(200).json(newHero);
} 
catch (err) 
{
res.status(400).json(err);
}
});





router.delete('/:id', withAuth, async (req, res) => {
try 
{
const postData = await Hero.destroy({
where: 
{
id: req.params.id,
user_id: req.session.user_id,
},
});
if (!postData) 
{
res.status(404).json
({ message: 'No post found with this id!' });
return;
}
res.status(200).json(postData);
} 
catch (err) 
{
res.status(500).json(err);
}
});

module.exports = router;
