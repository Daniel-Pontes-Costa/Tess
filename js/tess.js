
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          
          videoId: 'p32b5nNq1zw',
          //videoId: 'scTqpfL9WMA',
          events: {
            //'onReady': onPlayerReady,
           // 'onStateChange': onPlayerStateChange
          }
        });
      }
      function proximacusica() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'p32b5nNq1zw',
          events: {
            'onReady': onPlayerReady,
            
          }
        });
      }
      
      

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 1000);
          done = true;
        }
      }
      function playVideo() {
        player.playVideo();
      }
      function stopVideo() {
        player.stopVideo();
      }
      
      
      
      
      

		nlp = window.nlp_compromise;

		var messages = [], //array that hold the record of each string in chat
		  lastUserMessage = "", //keeps track of the most recent input string from the user
		  botMessage = "", //var keeps track of what the chatbot is going to say
		  botName = ' Téss ', //name of the chatbot
		  talking = true; //when false the speach function doesn't work
		  var lista_string = [24];
		  var cont = 1;
function popup(URL) {
var width = 1024;
var height = 700;
var left = 30;
var top = 50;
window.open(URL, 'janela', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
}
function criarPopup(){
newWindow = window.open ('', 'pagina');
newWindow.document.write ("Este é um novo popup <br/> <img src='imagem.jpg' width='100' height='100'>");
}
		function QuebraString(){

		 var resposta = lastUserMessage;
		 var i = 0;
		 while(0 < resposta.length){
		  
		  lista_string[i] = resposta.substring(0, resposta.indexOf(" ")+1);
		  lista_string[i] = lista_string[i].trim();
		  resposta = resposta.replace(resposta.substring(0, resposta.indexOf(" ")+1),"");
		  i++;
		 }
		 
		}

		function limparLista(){
		 for(var i = 0; i< lista_string.length;i++){
		  lista_string[i] = null;
		 }
		}

		//edit this function to change what the chatbot says
		function chatbotResponse() {
		  talking = true;
		  botMessage = ""; //the default message

		  limparLista();

		  QuebraString();

		  	for(var i = 0; i<lista_string.length;i++){
         	lista_string[i] = lista_string[i].toLowerCase()

			    if (lista_string[i] === "oi" || lista_string[i] =="olá" ) {
       			const hi = ['oi','ola tudo bem','olá']
       			botMessage = botMessage + " " + hi[Math.floor(Math.random()*(hi.length))];
      			}

			    if (lista_string[i] === "hoje") {
			    var data = new Date();
                var dias = new Array('domingo','segunda','terça','quarta','quinta','sexta','sábado');
       			botMessage = botMessage + " " + 'Hoje é ' + dias[data.getDay()]  ;
      			}

      			if (lista_string[i] === "horas") {
       			var datas = new Date();
       			botMessage = botMessage + " " + datas.getHours()+' horas e ' + datas.getMinutes() + ' minutos' ;
      			}
      
      			if (lista_string[i] === "nome") {
       			botMessage = botMessage + "Meu nome é" + botName;
      			}
			    if (lista_string[i] === "bem") {
			       botMessage = botMessage + " " + 'sim e voce';
			    }
			    if (lista_string[i] === "recarregar") {
			       botMessage = botMessage + " recarregando";
			       window.location.reload(); 
			    }
		        if (lista_string[i] === "você") {
		        botMessage = botMessage + " eu sou um robô... portador de inteligencia artifical básica";
		        }
        
                if (lista_string[i] === "risada") {
                botMessage = botMessage + " kkkkkkkk ras ras ras kkkkkkkkkk";
                }
                if (lista_string[i] === "time") {
                botMessage = botMessage + " flamengo, é claro, o melhor time do mundo";
                }
                if (lista_string[i] === "piada") {
                botMessage = botMessage + "O que uma impressora falou pra outra?";
                }
                if (lista_string[i] === "sei") {
                botMessage = botMessage + "Esse papel é seu ou é IMPRESSÃO minha!!!  riririririri kakaka";
                }
                if (lista_string[i] === "pesquisar") {
                botMessage = botMessage + " ok";
                window.open("http://pt.stackoverflow.com");
      			}
        	    if (lista_string[i] === "criador" || lista_string[i] =="criou" || lista_string[i] =="construiu"  ) {
                botMessage = botMessage + " Meu criador se chama Daniel Pontes Costa";
                }
                if (lista_string[i] === "obrigado") {
                botMessage = botMessage + " eu que agradeço";
                }
      
                if (lista_string[i] === "robô") {
                botMessage = botMessage + " sim, em que posso ajudalo";
                }
                if (lista_string[i] === "ouvir" && lista_string[i+1] === "música" ) {
       
                botMessage = botMessage + "vou tocar sua música";
                playVideo();
                }
                if (lista_string[i] === "iniciar" && lista_string[i+1] === "música") {
                botMessage = botMessage + "iniciei a música";
                playVideo();
                }
                if (lista_string[i] === "próxima" && lista_string[i+1] === "música") {
                botMessage = botMessage + "próxima a música";
                proximacusica();
                }
                if (lista_string[i] === "parar" && lista_string[i+1] === "música") {
                botMessage = botMessage + "parei a música";
                stopVideo();
                }
		  	}

		  	if(botMessage.length === 0){
		   	botMessage = "Não compreendo";
			}

		}
		//this runs each time enter is pressed.
		//It controls the overall input and output
		function newEntry() {
		  //if the message from the user isn't empty then run 
		  if (document.getElementById("chatbox").value != "") {
		    //pulls the value from the chatbox ands sets it to lastUserMessage
		    lastUserMessage = document.getElementById("chatbox").value + " ";
		    //sets the chat box to be clear
		    document.getElementById("chatbox").value = "";
		    //adds the value of the chatbox to the array messages
		    messages.push(lastUserMessage);
		    //Speech(lastUserMessage);  //says what the user typed outloud
		    //sets the variable botMessage in response to lastUserMessage
		    chatbotResponse();
		    //add the chatbot's name and message to the array messages
		    messages.push("<b>" + botName + ":</b> " + botMessage);
		    // says the message using the text to speech function written below
		    Speech(botMessage);
		    //outputs the last few array elements of messages to html
		    for (var i = 1; i < 8; i++) {
		     if (messages[messages.length - i])
		      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
		    }
		}else{
			lastUserMessage = document.getElementById("chatbox").value + " ";
		    //sets the chat box to be clear
		    document.getElementById("chatbox").value = "";
		    //adds the value of the chatbox to the array messages
		    messages.push(lastUserMessage);
		    //Speech(lastUserMessage);  //says what the user typed outloud
		    //sets the variable botMessage in response to lastUserMessage
		    chatbotResponse();
		    //add the chatbot's name and message to the array messages
		    messages.push("<b>" + botName + ":</b> " + botMessage);
		    // says the message using the text to speech function written below
		    Speech(botMessage);
		    //outputs the last few array elements of messages to html
		    for (var i = 1; i < 8; i++) {
		     if (messages[messages.length - i])
		      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
		    }

		}
		}

		//text to Speech
		//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
		function Speech(say) {
		 if ('speechSynthesis' in window && talking) {
		  var utterance = new SpeechSynthesisUtterance(say);
		    //msg.voice = voices[10]; // Note: some voices don't support altering params
		    //msg.voiceURI = 'native';
		    //utterance.volume = 1; // 0 to 1
		    //utterance.rate = 0.1; // 0.1 to 10
		    utterance.pitch = 1.2; //0 to 2
		    //utterance.text = 'Hello World';
		    //utterance.lang = 'en-US';
		    speechSynthesis.speak(utterance);
		}
		}

		//runs the keypress() function when a key is pressed
		document.onkeypress = keyPress;
		//if the key pressed is 'enter' runs the function newEntry()
		function keyPress(e) {
		 var x = e || window.event;
		 var key = (x.keyCode || x.which);
		 if (key == 13 || key == 3) {
		    //runs this function when enter is pressed
		    newEntry();
		}
		if (key == 38) {
		 console.log('hi')
		      //document.getElementById("chatbox").value = lastUserMessage;
		  }
		}

		//clears the placeholder text ion the chatbox
		//this function is set to run when the users brings focus to the chatbox, by clicking on it
		function placeHolder2() {
		 document.getElementById("chatbox").placeholder = "";
		}
		function placeHolder() {
		 document.getElementById("chatbox").value = transcription.textContent;
		}
		
		
		







































	