## This is a project made for the course Speech & Sound Processing of Ionian University.

![chess piano web application](https://github.com/sakis475/Play-chess-with-piano/blob/master/pianoChess.jpg)
Piano chess is the ability to play the regular old plain chess with piano notes. The player plays the normal chess game against the computer. The difference with the hundreds of implementations available on the internet is that the player does not use his keyboard or cursor to make his next move. But instead his musical instrument and specifically the piano. I have successfully played several chess games with the computer using only musical notes. What is most interesting is that at the end of each game there is the option "replay" of the game with each movement of pawns to play musical instruments!

Check it out here: https://www.youtube.com/watch?v=dLNQM4FHvnI





## INSTALLATION

This guide is made for Windows 10. I was using GNU Octave 6.2.0 and Node.js v14.16.1

1. copy set_up folder to Desktop

2. install git 
https://git-scm.com/downloads

3. install nodejs
https://nodejs.org/en/

4. install octave gnu
https://www.gnu.org/software/octave/download

    4.1.  copy installation of octaveGnu in the web_app folder [this will take a couple of minutes]
    'GNU Octave' folder is located at c:/Program Files
    (I couldnt run octave with node.js from the original installation folder sorry)

   4.2.  rename '*GNU Octave*' folder -> '*GNUOctave*'


5. copy octave_files content to web_app/GNUOctave/Octave-YOUR_VERSION_OF_OCTAVE

6. in chess2.js file, change path at line 45

   change *YOUR_USERNAME* of your machines username
   change *YOUR_VERSION_OF_OCTAVE* as your Octave folder name states
  
   warning: full paths are required!
 

    > 45~ destination: 'C:/Users/YOUR_USERNAME/Desktop/set_up/web_app/GNUOctave/Octave-YOUR_VERSION_OF_OCTAVE',


7. in findnote.js change paths at lines 21,48

  

    > 21~ var target = path.join("C:","Users","gauge","Desktop","epeksergasiaOmiliasHxou","ergasia","proodos_3_P2015038","GNUOctave","Octave-6.1.0",'output.txt');

  

   >   48~ let pathToOctave =
   > "C:/Users/gauge/Desktop/epeksergasiaOmiliasHxou/ergasia/proodos_3_P2015038/GNUOctave/Octave-6.1.0"

   change path so it will match your system paths, with the same logic as step 6 
warning: full paths are required!

8. open git in web_app folder and install depedencies
	
	

    > npm init //press enter until finished
    > 
    > 	npm install express
    > 
    > 	npm install multer
    > 
    > 	npm install js-chess-engine
    > 
    > 	npm install body-parser
    > 
    > 	npm install ejs

9. in web_app folder open git and run 
  

   > node chess2.js [allow network access]

10. open browser at localhost:3000
  [allow microphone access when asked]
  play chess with piano!

