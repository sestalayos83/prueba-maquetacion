$(document).ready(function () {
  var tabs = $('.tabs__item');
  var contents = $('.tabs__content');

  function activeTabOnClick(tab,content){
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
    activeTabOnClick(tabs[i],contents[i]);
  }
});

