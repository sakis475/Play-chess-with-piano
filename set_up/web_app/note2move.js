//metatroph twn notwn se kinhshs sthn skakistikh shmeiografia
//pairnw tis notes mias oktavas kai ths antistoixw sta kelia ths skakiseras
//---------------//
//C D E F G A B C5
//a b c d e f g h
//1 2 3 4 5 6 7 8
//---------------//
//shmeiwsh oti xreiazomai 8 grammata
//opote pairnw kai thn prwth nota ths epomenhs oktavas
//etsi opws to exw ylopoihsh edw auth einai h C5
//opote oi notes pou tha paizontai tha prepei na einai
//sthn 4h oktava: C4 D4 E4 F4 G4 A4 B4 C5

function findLetter(note){

  letter = '';

  if(note.substring(0,2) == 'C5'){
    letter = 'h';
  } else if(note.substring(0,1) == 'C'){
    letter = 'a';
  } else if(note.substring(0,1) == 'D'){
    letter = 'b';
  } else if(note.substring(0,1) == 'E'){
    letter = 'c';
  } else if(note.substring(0,1) == 'F'){
    letter = 'd';
  } else if(note.substring(0,1) == 'G'){
    letter = 'e';
  } else if(note.substring(0,1) == 'A'){
    letter = 'f';
  } else if(note.substring(0,1) == 'B'){
    letter = 'g';
  }

  return letter;

}


function findNumber(note){
  number = '';

  if(note.substring(0,2) == 'C5'){
    number = '8';
  } else if(note.substring(0,1) == 'C'){
    number = '1';
  } else if(note.substring(0,1) == 'D'){
    number = '2';
  } else if(note.substring(0,1) == 'E'){
    number = '3';
  } else if(note.substring(0,1) == 'F'){
    number = '4';
  } else if(note.substring(0,1) == 'G'){
    number = '5';
  } else if(note.substring(0,1) == 'A'){
    number = '6';
  } else if(note.substring(0,1) == 'B'){
    number = '7';
  }

  return number;
}





function getNote2Move(notes) {


  var moves = '';

  moves += findLetter(notes.substring(0,2));
  moves += findNumber(notes.substring(3,5));
  moves += '-';
  moves += findLetter(notes.substring(6,8));
  moves += findNumber(notes.substring(9,11));

  return moves;

}






module.exports = { getNote2Move };
