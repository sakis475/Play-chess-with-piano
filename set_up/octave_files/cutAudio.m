#to audioFile einai to onoma tu hxhtikou arxeiou
#douleia tou einai na entopisei tis notes tu pianou
#kai na tis diaxwrisei
#den prepei na yparxei epikalhpsh metaksi twn notwn
function splitAudio = cutAudio(audioFile)


  i = 1;
  segments = {};

  [x,fs] = audioread(audioFile);

  while i < length(x)

    #vres to prwto amplitude megalytero
    #tu 0.4, peiramatikh timh poy shmatodoth
    #thn arxh ths notas
    if(x(i) > 0.4)

      
      continueIndex = i+5000;

      #elexgos gia to teleutaio loop
      #na mhn ginei out of bound
      if( (i+5000) > length(x) )
        continueIndex = length(x);
      endif

      #to segments katexei oles tis notes pou vrethikan
      #pairnw kai 4000 samples pisw apo to i gia na eimai sigouros
      #oti tha emperiexete kai h ipsiloterh syxnothta ths notas
      segments(end+1) = { x(i-4000:continueIndex) };

      i = i+fs;

    endif

    i = i + 1;

  endwhile


  splitAudio = segments;

endfunction
