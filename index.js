const app = require("./src/app");
const axios = require('axios')

const PORT = 80

async function getPlayers(){
    try{
        await axios.get('https://play.joblify.co')
    }catch(err){
        true
    }
}

getPlayers()
setInterval(getPlayers, 3000)

app.listen(PORT);
require("./src/db");
("Listening on port", PORT);

module.exports = app