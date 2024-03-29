
          // Test browser support
        window.SpeechRecognition = window.SpeechRecognition       ||
                                   window.webkitSpeechRecognition ||
                                   null;
   
      //caso não suporte esta API DE VOZ                              
      if (window.SpeechRecognition === null) {
          document.getElementById('unsupported').classList.remove('hidden');
          }else {
              var recognizer = new window.SpeechRecognition();
              var transcription = document.getElementById("transcription");
            //Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
            recognizer.continuous = true
            recognizer.onresult = function(event){
              transcription.textContent = "";
              for (var i = event.resultIndex; i < event.results.length; i++) {
                if(event.results[i].isFinal){
                  //transcription.textContent = event.results[i][0].transcript+' (Taxa de acerto [0/1] : ' + event.results[i][0].confidence + ')';
                  transcription.textContent = event.results[i][0].transcript;
                  //momento final da trancrição.
                  placeHolder();
                  newEntry();
                  //alert(transcription.textContent);
                }else{
                    transcription.textContent += event.results[i][0].transcript;
                }
              }
            }
            document.querySelector("#rect").addEventListener("click",function(){
              try {
                  recognizer.start();
                } catch(ex) {
                //  alert("error: "+ex.message);
                }
            });
          }

      function ouvir() {
      try {
          recognizer.start();

        } catch(ex) {
        //  alert("error: "+ex.message);
        }
      }
