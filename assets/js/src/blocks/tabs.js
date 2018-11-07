$(document).ready(function () {
  var tabs = $('.tabs__item');
  var contents = $('.tabs__content');

  function activarTabOnClick(tab,content){
    tab = $(tab);
    content = $(content);

    tab.click(function(){
        tabs.removeClass('active');
        contents.removeClass('active');

        tab.addClass('active');
        content.addClass('active');
    }); 
  }

  for(var i = 0; i < tabs.length; i++){
    console.log(tabs[i]);
    activarTabOnClick(tabs[i],contents[i]);
  }
});

