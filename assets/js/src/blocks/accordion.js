$(document).ready(function () {
  var sections = $('.accordion__section');
  var contents = $('.accordion__content');

  function openAccordion(section, content){
    $(section).click(function(){
        contents.stop().slideUp('slow');
        $(content).stop().slideDown('slow',function(){
            sections.removeClass('open');
            $(section).addClass('open');
        });
    });
  }

  for(var i = 0; i < sections.length; i++){
    openAccordion(sections[i], contents[i]);
  }
});

