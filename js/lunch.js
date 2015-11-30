$(document).on('ready', function(){
    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      $overlay.removeClass('state-show');
      $modal.removeClass('state-appear').addClass('state-leave');
    });

    $('.open').on('click', function(){
      $overlay.addClass('state-show');
      $modal.removeClass('state-leave').addClass('state-appear');
    });

  });

var menuURL = "";
var menuTrue = false;

function setMenu() {
  if (menuTrue) {
    window.location.href = menuURL;
  } else {
    window.location.href = "http://www.woodbridge.suffolk.sch.uk/lunch-menus/";
  }
}

$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'www.woodbridge.suffolk.sch.uk%2Flunch-menus%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data) {
	console.log(data);
  parsedData = data.query.results.body.div[0].div[1].div[1].div;
	seniorSchool = [parsedData[0].p[1].a.content.substring(16), parsedData[0].p[1].a.href];
	boarders = [parsedData[1].p[1].a.content.substring(16), parsedData[1].p[1].a.href];
  document.getElementById("lunchMenu").setAttribute("href", seniorSchool[1]);
	//$('#menu1').html('<a href="' + seniorSchool[1] + '">' + seniorSchool[0] + ' for Senior School Pupils</a>');
	//$('#menu2').html('<a href="' + boarders[1] + '">' + boarders[0] + ' for Boarders</a>');
  menuURL = seniorSchool[1];
  menuTrue = true;
	console.log(seniorSchool);
	console.log(boarders);
})