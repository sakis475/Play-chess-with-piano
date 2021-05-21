//xreiazetai kapoios xronos gia na treksei to octave apo system call
//elegxw kathe miso deuterolepto an exei ginei kapoio write sto arxeio
//pou petaei to octave gia na katalavw an exei vrei tis kainourgies notes


var path = require('path');

//to wait.js to phra apo https://www.codeproject.com/Articles/1088043/Async-Wait-for-Files-to-Change-using-Node-js-FS
//xrhsimopoih thn inbuild library fs
//wste na diavazei to date modified enos arxeiou
//an exei allaksei to date apo thn stigmh pou to parakolouthume (watchFile)
//shmainei oti exei tropopoihthei to arxeio kai to octave teleiwse to running tou
var wait = require('./wait.js');



function runOctave(pathToOctave){
  return new Promise(resolve => {
    var cp = require("child_process");

    var target = path.join("C:","Users","gauge","Desktop","epeksergasiaOmiliasHxou","ergasia","proodos_3_P2015038","GNUOctave","Octave-6.1.0",'output.txt');


    cp.exec("octave crfile.m", {cwd: pathToOctave}, function(error,stdout,stderr){});


    wait.start(target, onFileChange, 20000);
    function onFileChange(type, current, previous) {
      if(type == 'File modified.'){
        resolve('resolved')
      } else {
        console.log("timeout  Error");
      }
    }



  })
}


//trexw ta octave script gia na vrw tis tis notes
async function getNote() {
  // var cp = require("child_process");
  var fs = require('fs');


  let pathToOctave = "C:/Users/gauge/Desktop/epeksergasiaOmiliasHxou/ergasia/proodos_3_P2015038/GNUOctave/Octave-6.1.0"
  var outputString;
  const result = await runOctave(pathToOctave);

  try {
      var data = fs.readFileSync(pathToOctave+'/output.txt', 'utf8');
      outputString = data.toString();
  } catch(e) {
      console.log('Error:', e.stack);
  }
  outputString = outputString.split('\n')


  console.log("read the output: " + outputString[[5]]);

  return outputString[[5]];
}




module.exports = { getNote };
