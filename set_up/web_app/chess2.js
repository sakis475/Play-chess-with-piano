//This is the express.js server of the app.

const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const jsChessEngine = require('js-chess-engine')




const app = express();

//xrhsimopoiw to ejs embedding system
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


var board = null

const gameAI = new jsChessEngine.Game()


const findnote = require("./findnote");
const note2move = require("./note2move");





//sto primary domain emfanizei to index.ejs poy ousiasthka
//einai html,css,js based selida
app.get("/", function(req,res){

  res.render("index.ejs");

});


//to multer einai middleware gia to node.js
//epitrepei thn apostolh arxeiwn apo to client sto server kai antistrofa
const storage = multer.diskStorage(
    {
        destination: 'C:/Users/gauge/Desktop/epeksergasiaOmiliasHxou/ergasia/proodos_3_P2015038/GNUOctave/Octave-6.1.0',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer( { storage: storage } );


app.use(express.static('./'));



//kathe fora pu tha ginete stop (diladh tha oloklhrwnete) h hxografish
app.post("/notes", upload.single("audio_data"), function(req,res){


    //perimenw na trexei to octove sto background kai
    //na moy dwsei to apotelesma
    findnote.getNote().then(function(oneMove){

      //metatrepw tis notes se skakistikes kinhseis
      let transcribeMove = note2move.getNote2Move(oneMove);
      console.log(transcribeMove);


      let correctMoveWhite = false;
      let correctMoveBlack = false;
      let moveAi;
      let moveAi2;
      let finishedWhite = false;
      let finishedBlack = false;

      //dinw sto bot thn kinhsh.
      //elegxei an einai valid h kinhsh
      //an einai valid mu epistrefei thn epomenh kinhsh
      //thn kinhsh gia ta maura
      //an den einai valid enhmerwnh ton paikth
      //oti epekse invalid kinish
      function playAI2(level) {
        return new Promise(function(resolve,reject){
          try {
            let move = JSON.stringify(gameAI.aiMove(level));
            resolve(move)
          } catch (e) {
            resolve("xxxxxxxxxxx")
          }


        })

      }

      //elexgei to checkmate, poios exei kanei lathos kinhsh
      //kai epistrefei ston client tis kinhseis
      async function validateMove(){
        console.log("inside validateMove()");
        try {

          moveAi = transcribeMove;
          gameAI.move(moveAi.substring(0,2),moveAi.substring(3,5))
          console.log("moveAi white:" + moveAi);
          correctMoveWhite = true;
        }
        catch(err) {
          correctMoveWhite = false;
          finishedWhite = true;
          console.log("White invalid move "+ err);
        }


        try {
          if(correctMoveWhite){
            moveAi2 = await playAI2(0);
            console.log("moveAi black:" + moveAi2);
            correctMoveBlack = true;
          }
        }
        catch(err) {
          correctMoveBlack = false;
          finishedBlack = true;
          console.log("Black invalid move "+ err);

        }

        if(correctMoveWhite && correctMoveBlack) {


            if (!finishedWhite) {

            } else {
              moveAi = "xx-xx"
            }

            if (!finishedBlack) {
              fromPosAi2 = moveAi2.substring(2,4).toLowerCase()
              toPosAi2 = moveAi2.substring(7,9).toLowerCase()

              moveAi2 = fromPosAi2 + '-' + toPosAi2
            } else{
              moveAi2 = "xx-xx"
            }

            movePair = moveAi + moveAi2;
            res.status(200).send(movePair);
            console.log("new move!");


        } else{
          console.log("Invalid move");
          res.status(200).send("wrong move");
        }
      }
      console.log("now calling validateMove");

      validateMove();

      //console.log(gameAI.getHistory(false));



    });

    });

    app.post("/history", function(req,res){

      res.status(200).send(JSON.stringify(gameAI.getHistory(false)));

      //console.log(gameAI.getHistory(false));
    })


//ksekinaei o server sto localhost:3000
app.listen(3000, function(){
  console.log("LocalServer has started at 3000 Port!");
});
