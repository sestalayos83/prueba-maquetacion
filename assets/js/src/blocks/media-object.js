$(document).ready(function () {
  var objects = $('.media-object');
  var infos = $('.media-object__extra-info');

  function showExtraInfo(object,info){
    $(object).click(function(){
        $(info).stop().slideToggle('slow',function(){
            $(object).toggleClass('open');
        });
    });
  }

  for(var i = 0; i < objects.length; i++){
    showExtraInfo(objects[i], infos[i]);
  }
});

