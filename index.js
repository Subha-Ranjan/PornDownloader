const express = require('express')
const app = express()
const routerLink = require('./router')
const cors = require('cors')

const { PornHub } = require("pornhub.js");
const pornhub = new PornHub()

// const {HttpsProxyAgent} = require('https-proxy-agent')
// const proxy = 'http://168.63.76.32:3128'
// const httpsAgent = new HttpsProxyAgent(proxy)
// pornhub.setAgent(httpsAgent)


//=====Video fetch Functions============
// async function calApiXvideos(url){
// console.log("Xvideos API call");
// const url = 'https://www.xvideos.com/video.udubmed29e7/her_nipples_almost_exploded_-_cumslut_cutie_gets_massive_cumshower';
// const details = await xvideos.videos.details({url});
// console.log(details.files);

// }

// async function callApiPornHub(res){
//     console.log("Pornhub API Call");

//     const url = "https://www.pornhub.com/view_video.php?viewkey=654a393e414f2"
//     // pornhub.video(url).then((data)=>res.send(data)).catch((err)=>console.log("So ther is some error: \n",err))
//     data = await pornhub.webMaster.getVideo(url);
//     res.send(data)
   
// }

// async function callApiSpankBang(url){
//  console.log("SpankBang api all")
// const url = 'https://spankbang.com/7slau/video/new+sensations+my+girlfriend+calls+me+while+she+s+fucking+bbc+alyx+star'
// const details = await spankbang.videos.details({url})

// console.log(details.files)
// }
//======================================
app.use(cors());
app.use(express.json());

app.get("/", async (req,res)=>{
  const url = "https://www.pornhub.com/view_video.php?viewkey=654a393e414f2"
  const video = await pornhub.video(url)
  res.send(video)

  // res.send(data)
  // res.status(200).send("Server is up and running!!! 🔥")
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

app.use("/api", routerLink)
app.listen("8000",()=>{console.log("Server started at 8000");})