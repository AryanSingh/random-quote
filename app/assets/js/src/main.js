

$(document).ready(function(){
  $("#new-quote").on("click",function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",function(json){
      json = JSON.stringify(json);
      console.log(json);
      json = JSON.parse(json);
      console.log(json);
      console.log(json.contents.quotes[0].quote);
      $(".quote-text").html(json.contents.quotes[0].quote);
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
  });
});
