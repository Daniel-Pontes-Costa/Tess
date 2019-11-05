<!DOCTYPE html>
<html lang="pt-br">
  <?
  $title = "Tess";
  $h1 = "Tess";
  include('inc/head.php');
  ?>
</head>
<body>
  <?include('inc/topo.php');?>
  <h1><?=$h1?></h1>
  <div class="container-fluid mt-5">
    <div class="row">
      
      <div class="col-12 ">
        <div id="transcription"></div>
        <button id="rect">TÉSS</button>
        <span id="unsupported" class="hidden">API not supported</span>
        <div id="bodybox">
          <div id="chatborder">
            <p id="chatlog7" class="chatlog">&nbsp;</p>
            <p id="chatlog6" class="chatlog">&nbsp;</p>
            <p id="chatlog5" class="chatlog">&nbsp;</p>
            <p id="chatlog4" class="chatlog">&nbsp;</p>
            <p id="chatlog3" class="chatlog">&nbsp;</p>
            <p id="chatlog2" class="chatlog">&nbsp;</p>
            <p id="chatlog1" class="chatlog">&nbsp;</p>
            <input type="text" name="chat" id="chatbox" placeholder="/" onfocus="placeHolder()" onblur="placeHolder2()">
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
  <?
  include('inc/footer.php');
  ?>
</body>
</html>