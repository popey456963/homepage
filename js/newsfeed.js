function getURL(){
  var URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml%3Fedition%3Duk%0A%22&diagnostics=true";
  var json;
  $.get( URL, function( data ) {
    $( ".result" ).html( data );
    //console.log(data);
    //alert( "Load was performed." );
    json = xmlToJson(data);
    //console.log(json)
    var items = json["query"]["results"]["item"];
    //console.log(items);
    $( ".newsfeed" ).append('<section class="card" id="newsfeedinner">');
    $( ".newsfeed" ).append('</section>');
    for(i=0;i<3;i++){
      console.groupCollapsed("News Item: " + items[i]['title']['#text']);
      console.log(items[i]['title']['#text']);
      console.log(items[i]['description']['#text']);
      console.log(items[i]['link']['#text']);
      console.groupEnd();
      appendToDiv(items[i]['title']['#text'], items[i]['description']['#text'], items[i]['link']['#text']);
    }
  })
  .fail(function() {getURL();});
}

function appendToDiv(title, description, link){
  var firstWord = title.split(" ")[0];
  var otherWord = title.substr(title.indexOf(" ") + 1);
  var inner = "<a style='text-decoration: none;' href='" + link + "'><h1><strong>" + firstWord + "</strong> " + otherWord +"</h1><h2>" + description + "</h2></a>";
  $( "#newsfeedinner" ).append( inner );
}
getURL();
//http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk