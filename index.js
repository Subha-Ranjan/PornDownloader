const express = require('express')
const app = express()

const spankbang = require('spankbang')
const HttpProxyAgent = require('http-proxy-agent')
const { PornHub } = require('pornhub.js')
const pornhub = new PornHub()

// const {HttpsProxyAgent} = require('https-proxy-agent')
// const proxy = 'http://168.63.76.32:3128'
// const httpsAgent = new HttpsProxyAgent(proxy)
// pornhub.setAgent(httpsAgent)


const xvideos = require('xvideosx');
 

async function calApiXvideos(){
console.log("Xvideos API call");
const url = 'https://www.xvideos.com/video.udubmed29e7/her_nipples_almost_exploded_-_cumslut_cutie_gets_massive_cumshower';
const details = await xvideos.videos.details({url});
console.log(details.files);

}

async function callApiPornHub(){
    console.log("Pornhub API Call");

    const url = "https://www.pornhub.com/view_video.php?viewkey=654a393e414f2"
    pornhub.video(url).then((data)=>res.send(data)).catch((err)=>console.log("So ther is some error: \n",err))
   
}

async function callApiSpankBang(){
 console.log("SpankBang api all")
const url = 'https://spankbang.com/7slau/video/new+sensations+my+girlfriend+calls+me+while+she+s+fucking+bbc+alyx+star'
const details = await spankbang.videos.details({url})

console.log(details.files)
}

app.get("/", (req,res)=>{res.status(200).send("Server is up and running!!! 🔥")}
)

app.post("/", (req,res)=>{
    const url = "https://www.pornhub.com/view_video.php?viewkey=654a393e414f2"
    pornhub.video(url).then((data)=>res.send(data)).catch((err)=>console.log("So ther is some error: \n",err))
}
)

app.listen("8000",()=>{console.log("Server started at 8000"); callApiSpankBang();callApiPornHub();calApiXvideos();})