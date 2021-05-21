[x,fs] = audioread('sound-file.wav');


#xwrizw se 4 merh ton hxhtiko arxeio mou
#me thn cutAudio
fourNotes = cutAudio('sound-file.wav');


#grafw ta 4 merh se ksexwrista arxeia
audiowrite('note1.wav', cell2mat(fourNotes(1,1) ), fs);
audiowrite('note2.wav', cell2mat(fourNotes(1,2) ), fs);
audiowrite('note3.wav', cell2mat(fourNotes(1,3) ), fs);
audiowrite('note4.wav', cell2mat(fourNotes(1,4) ), fs);


y1 = audioread('note1.wav');
y2 = audioread('note2.wav');
y3 = audioread('note3.wav');
y4 = audioread('note4.wav');


note1 = findNote(y1, fs);
note2 = findNote(y2, fs);
note3 = findNote(y3, fs);
note4 = findNote(y4, fs);


#oi notes eksagontai sthn forfh: 
#px C4 G4 C4 A4
y = cstrcat(note1, ' ', note2, ' ', note3, ' ', note4);
#kai tis apothikeuw sto arxei output.txt
save output.txt y;


clear all;