const router = require('express').Router();
const { Hero } = require('../../models');
const withAuth = require('../../utils/auth');
const axios = require('axios');

router.get(`/:hero`,withAuth, async (req,res)=>{
    const heroName = req.params.hero;
    const heroData = await axios.get(`https://superheroapi.com/api/4085762414794326/search/${heroName}`);
    res.json(heroData.data.results[0].name)
    console.log(heroData.data.results[0].name);
    res.append(document.getElementById('#heroName').innerHTML(heroData.data.results[0].name));
    // console.log(weathData.list);
  
    // for (let i = 0; i < 5; i++) {
    //   let iconID = weathData.list[i].weather[0].icon;
    //   let iconUrl = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
    //   let iconEl = $("<img>").attr("alt", "weatherIcon").attr("src", iconUrl);
  
    //   $("#weatherIcon" + (i + 1)).append(iconEl);
    //   $("#tempDisplay" + (i + 1)).text(weathData.list[i].main.feels_like);
    //   $("#windDisplay" + (i + 1)).text(weathData.list[i].wind.speed);
    //   $("#humidDisplay" + (i + 1)).text(weathData.list[i].main.humidity);
    // }
      
})


// actual route /api/heros/
router.post(`/:hero`, withAuth, async (req, res) => {
    try 
    {
        const heroName = req.params.hero;
        const heroData = await axios.get(`https://superheroapi.com/api/4085762414794326/search/${heroName}`);
        res.json(heroData.data.results[0].name)
        console.log(heroData.data.results[0].name);
        res.append("#heroName");
        console.log("#heroName");
    } 
    catch (err) 
    {
    res.status(400).json(err);
    }
    });





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
