#vriskei thn nota kai thn oktava ths
#apo ta n vhmata apostashs apo thn A4
function noteOct = number2note(n)

  note = -1;



  if (n >= -9 && n <= 2)
    
    octave = 4;
    
    note = n + 9;
    
  elseif (n < -9)
    
    octave = floor( ( (n+9) / 12 ) );
    octave = 3;
    
    note = mod((n+9),12);

  elseif (n > 2)

    octave = ceil( (n-2) / 12 );
    octave = 5 ; 
    
    note = mod((n-3),12);
    
  endif



  if(note == 0)
    noteOct = cstrcat('C',num2str(octave) );
  elseif(note == 1)
    noteOct = cstrcat('C',num2str(octave));
  elseif(note == 2)
    noteOct = cstrcat('D',num2str(octave));
  elseif(note == 3)
    noteOct = cstrcat('D',num2str(octave));
  elseif(note == 4)
    noteOct = cstrcat('E',num2str(octave));
  elseif(note == 5)
    noteOct = cstrcat('F',num2str(octave));
  elseif(note == 6)
    noteOct = cstrcat('F',num2str(octave));
  elseif(note == 7)
    noteOct = cstrcat('G',num2str(octave));
  elseif(note == 8)
    noteOct = cstrcat('G',num2str(octave));
  elseif(note == 9)
    noteOct = cstrcat('A',num2str(octave));
  elseif(note == 10)
    noteOct = cstrcat('A',num2str(octave));
  elseif(note == 11)
    noteOct = cstrcat('B',num2str(octave));
  end
  
  
 
  

end