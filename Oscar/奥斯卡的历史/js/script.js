
$(function() {

  
  $('#coin-slider').coinslider({width:940,height:336,opacity:1});

  
  $('.article p.spec, .menu_nav ul').css({"border-radius":"10px", "-moz-border-radius":"10px", "-webkit-border-radius":"10px"});
  $('.content p.pages span, .content p.pages a').css({"border-radius":"6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
  $('.article .com').css({"border-top-right-radius":"12px", "border-bottom-right-radius":"12px", "-moz-border-radius-topright":"10px", "-moz-border-radius-bottomright":"8px", "-webkit-border-top-right-radius":"8px", "-webkit-border-bottom-right-radius":"8px"});
  
  

});	


Cufon.replace('h1, h2, h3, h4, h5, h6, .menu_nav ul li a, .post_content a.rm, .article a.com', { hover: true });



