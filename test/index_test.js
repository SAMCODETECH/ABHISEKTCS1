//Word Relations
describe("Related Words", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div  class="panel"><div class="jumbotron text-center"><h1>Type a word</h1><div class="form-group" style="width:100%; text-align:center;"><div style="width:60%; float:left;"><input type="word" class="form-control" id="word" placeholder="Type the word"></div><div style="width:20%; float:left;"><button type="button" class="btn btn-success" id="ButtonValue" onclick="relateDworD()"><span class="glyphicon glyphicon-search"></span> Find Relations</button></div></div></div><div class="container"><div class="row"><div class="col-sm-6"><h3>Synonyms</h3><p id="textSynon"></p></div><div class="col-sm-6"><h3>Related Words</h3><p id="textRelated"></p></div></div></div></div>';
  });

  
  describe("Testing function call", function() {
    it("Testing function call", function() {
      $("#word").val("world");
      $.ajaxSetup({
        async: false
      });
      $("#ButtonValue").trigger("click");
      expect(document.getElementById("textSynon").innerHTML).toContain("Earth");
      expect(document.getElementById("textRelated").innerHTML).toContain("country");
    });
  });
});



//Voice Text
describe("Word Pronunciation", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div class="panel"><div class="container"><h3>Type any word to hear its pronunciation</h3><div class="form-group" style="width:100%; text-align:center;"><div style="width:60%; float:left;"><input type="text" id="voiceword" class="audtext form-control" placeholder="Type any word without space"/></div><div style="width:20%; float:left;"><button type="button" value="Submit" class="btn btn-success" id="ButtonVoice" onclick="geTVoice()">Submit</button></div></div></div><p>&nbsp;</p><p><audio id="player" controls autoplay><source id="audiovoice" type="audio/mpeg">Your browser does not support the audio element.</audio></p></div>';
  });

  
  describe("Testing function call", function() {
    it("Testing function call", function() {
      $("#voiceword").val("world");
      $.ajaxSetup({
        async: false
      });
      $("#ButtonVoice").trigger("click");
      expect(document.getElementById("audiovoice").src).toContain('.mp3');
    });
  });
});