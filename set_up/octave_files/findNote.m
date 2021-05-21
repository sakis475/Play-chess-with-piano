#vriskei thn nota tou pianu apo thn syxnothta ths
#to x einai to hxhtiko shma kai to fs to
#sampling rate tou hxhtikou shmatos

function note2 = findNote(x,fs)


  pkg load signal;
  
  
  #krataw ena mono channel apo to shma
  x = x(:,1); 
  
  #kanonikopoiw to shma mu
  x = x/max(abs(x));


  #fft me megalytero resolution gia na exw megalyterh
  #akrivia sthn syxnothta
  y = fft(x,fs*5); 

  #apalazomai apo tus migadikus arithmous
  S = abs(y);

  #to b einai h thesh tou a sto S
  #auto shmainei oti to b einai h syxnothta
  #me to megalytero amplitude a
  [a,b] = max(S); 

  
  freq = b/5
  
  
  
  #n  =  12*log2(fn/fk Hz)
  #fn h syxnothta poy thelume na broume ta vhmata
  #apo thn statherh reference syxnothta 
  
  #to n einai ta vhmata makria/konta apo thn A4 nota
  #h diaforetika thn syxnothta 440hz
  
  
  n = round(12*log2(freq/440));
  
  sym = number2note(n);

  note2 = sym


end