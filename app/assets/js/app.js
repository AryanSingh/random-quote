
function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
$(document).ready(function(){
  $("#new-quote").on("click",function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",function(json){
      // json.header("Access-Control-Allow-Origin", "*");
      json = JSON.stringify(json);
      // console.log(json);
      json = JSON.parse(json);
      console.log(json);
      var htmlauth = "- ";
      htmlauth += json.quoteAuthor;
      $("#text").html(json.quoteText);
      $("#author").html(htmlauth);
      // console.log(json.contents);
      // var keys = Object.keys(json);
      // console.log(keys);
      // var html = "";
      // html += "<div class= 'quotes'>";
      // keys.forEach(function(key){
      //   html += "<b>" + key + "<b>:" + json[key] + "<br>";
      // });
      // html += "</div><br>"
      // console.log(json["contents"]);
      // var html = "";
      
      //   var keys = Object.keys(json);
      //   html += "<div class='quotes'>";
      //   keys.forEach(function(key){
      //     html += "<b>" + key + "<b>:" + val[key] + "<br>";
      //   });
      //   html += "</div><br>"
      
      // $(".quote-text").html(html);
    });
    var col = getRandomColor();
    $("body").css("background-color",col);
    $(".quote").css("color",col);
  });
});
