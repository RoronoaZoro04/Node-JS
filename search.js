const express = require("express");
const pirate = require("./pirate");
require("./config");

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
  let data = await pirate.find(
    {
        $or:[
            {name:{$regex:req.params.key}},
            {Profession:{$regex:req.params.key}},
            // {Bounty:{$regex:req.params.key}}
        ]
    }
  )
  res.send(data);
});

app.listen(3500);
