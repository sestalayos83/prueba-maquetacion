$(document).ready(function () {
  var boxes = $('.select-box__container');

  function selectBoxes(box){
    box = $(box);

    box.click(function(){
        boxes.removeClass('selected');

        box.addClass('selected');
    });
  }

  for(var i = 0; i < boxes.length; i++){
    selectBoxes(boxes[i]);
  }
});

