const router = require('express').Router();
const { Hero } = require('../../models');
const withAuth = require('../../utils/auth');

// list all heros






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
