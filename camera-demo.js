window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var scrollBottom = scrollTop + $(window).height()
  var showCartHeader = document.getElementById("show-cart-header")
  var cartHeader = document.getElementById("cart-header")
  var stickFooter = document.getElementById("stick-footer")
  var infoFooter = document.getElementById("info-footer")
  var topFooter = document.getElementById("top-footer")
  var handleFooter = document.getElementById("footer-attach")
  var leftNavbar = document.getElementById("left-navbar")
  var overviewContent = document.getElementById("overview-content")
  var section2Title = document.getElementById("section-2-title")
  var section3Title = document.getElementById("section-3-title")
  var section4Title = document.getElementById("section-4-title")
  var section5Title = document.getElementById("section-5-title")
  var section6Title = document.getElementById("section-6-title")
  var section7Title = document.getElementById("section-7-title")
  var leftNavbar1 = document.getElementById("left-navbar-1")
  var leftNavbar2 = document.getElementById("left-navbar-2")
  var leftNavbar3 = document.getElementById("left-navbar-3")
  var leftNavbar4 = document.getElementById("left-navbar-4")
  var leftNavbar5 = document.getElementById("left-navbar-5")
  var leftNavbar6 = document.getElementById("left-navbar-6")
  var leftNavbar7 = document.getElementById("left-navbar-7")

  // var testFooter = document.getElementById("test-footer")
  // var scrolledOnce = false;
  var firstScroll = true;
  if (scrollTop >= showCartHeader.offsetTop) {
    cartHeader.style.visibility = "visible"
    $("#cart-header").slideDown(400);
  } else {
    $("#cart-header").slideUp(400), function() { 
      cartHeader.style.visibility = "hidden"
    }
  }

  if (scrollBottom < (stickFooter.offsetTop) + 60) {
    infoFooter.style.position = "fixed";
    // infoFooter.style.width = "";
    infoFooter.style.top = "";
    infoFooter.style.bottom = "0px";
    handleFooter.style.paddingTop = "55px";
    // cartHeader.style.marginTop = "0px";
  } else if (scrollBottom >= (stickFooter.offsetTop + 60) && (scrollTop <= stickFooter.offsetTop - 110)) {
      // } else if (scrollBottom >= (stickFooter.offsetTop + 65) && scrollBottom <= topFooter.offsetTop ) {
        infoFooter.style.position = "static";
    // infoFooter.style.width = window.screen.width;
    // infoFooter.style.left = "50%";
    // infoFooter.style.right = "50%";
    // infoFooter.style.marginLeft = "calc(-100vw / 2 + 500px / 2)";
    // infoFooter.style.marginRight = "calc(-100vw / 2 + 500px / 2)";
        handleFooter.style.paddingTop = "55px";
  } else if (scrollBottom > stickFooter.offsetTop - 110) {
    infoFooter.style.position = "fixed";
    // infoFooter.style.width = "";
    infoFooter.style.top = "110px";
    infoFooter.style.bottom = "";
    handleFooter.style.paddingTop = "115px";

  } 

  // left navbar

  if (scrollTop < (overviewContent.offsetTop - 170)) {
    leftNavbar.style.position = "relative";
    leftNavbar.style.top = ""
    leftNavbar.style.left = ""
  } else if (scrollTop >= (overviewContent.offsetTop - 170)) {
        leftNavbar.style.position = "fixed";
        leftNavbar.style.marginLeft = "2vw"
        leftNavbar.style.top = "182px"
}

  if (scrollTop < (section2Title.offsetTop - 200)) {
    leftNavbar1.style.backgroundColor = "#9a9a9a";
        leftNavbar2.style.backgroundColor = "white";
        leftNavbar3.style.backgroundColor = "white";
        leftNavbar4.style.backgroundColor = "white";
        leftNavbar5.style.backgroundColor = "white";
        leftNavbar6.style.backgroundColor = "white";
        leftNavbar7.style.backgroundColor = "white";

  } else if ((scrollTop >= section2Title.offsetTop - 200) && (scrollTop < section3Title.offsetTop - 200)) {
         leftNavbar1.style.backgroundColor = "white";
        leftNavbar2.style.backgroundColor = "#9a9a9a";
        leftNavbar3.style.backgroundColor = "white";
        leftNavbar4.style.backgroundColor = "white";
        leftNavbar5.style.backgroundColor = "white";
        leftNavbar6.style.backgroundColor = "white";
        leftNavbar7.style.backgroundColor = "white";

 } else if ((scrollTop >= section3Title.offsetTop - 200) && (scrollTop < section4Title.offsetTop - 200))  {
    leftNavbar1.style.backgroundColor = "white";
        leftNavbar2.style.backgroundColor = "white";
        leftNavbar3.style.backgroundColor = "#9a9a9a";
        leftNavbar4.style.backgroundColor = "white";
        leftNavbar5.style.backgroundColor = "white";
        leftNavbar6.style.backgroundColor = "white";
        leftNavbar7.style.backgroundColor = "white";

 } else if ((scrollTop >= section4Title.offsetTop - 200) && (scrollTop < section5Title.offsetTop - 200))  {
        leftNavbar1.style.backgroundColor = "white";
        leftNavbar2.style.backgroundColor = "white";
        leftNavbar3.style.backgroundColor = "white";
        leftNavbar4.style.backgroundColor = "#9a9a9a";
        leftNavbar5.style.backgroundColor = "white";
        leftNavbar6.style.backgroundColor = "white";
        leftNavbar7.style.backgroundColor = "white";

 } else if ((scrollTop >= section5Title.offsetTop - 200) && (scrollTop < section6Title.offsetTop - 200))  {
         leftNavbar1.style.backgroundColor = "white";
        leftNavbar2.style.backgroundColor = "white";
        leftNavbar3.style.backgroundColor = "white";
        leftNavbar4.style.backgroundColor = "white";
        leftNavbar5.style.backgroundColor = "#9a9a9a";
        leftNavbar6.style.backgroundColor = "white";
        leftNavbar7.style.backgroundColor = "white";

 } else if ((scrollTop >= section6Title.offsetTop - 200) && (scrollTop < section7Title.offsetTop - 200))  {
         leftNavbar1.style.backgroundColor = "white";
        leftNavbar2.style.backgroundColor = "white";
        leftNavbar3.style.backgroundColor = "white";
        leftNavbar4.style.backgroundColor = "white";
        leftNavbar5.style.backgroundColor = "white";
        leftNavbar6.style.backgroundColor = "#9a9a9a";
        leftNavbar7.style.backgroundColor = "white";

 } else if (scrollTop >= section7Title.offsetTop - 200) {
   leftNavbar1.style.backgroundColor = "white";
        leftNavbar2.style.backgroundColor = "white";
        leftNavbar3.style.backgroundColor = "white";
        leftNavbar4.style.backgroundColor = "white";
        leftNavbar5.style.backgroundColor = "white";
        leftNavbar6.style.backgroundColor = "white";
        leftNavbar7.style.backgroundColor = "#9a9a9a";
}

// console.log(rect.top, rect.right, rect.bottom, rect.left);
}


function cusDD(select, style) {
  /*Style Switcher*/
  var ddstyle = "";
  if (!style) {
    ddstyle = "cusDD_default";
  } else if (style == "slick dark") {
    ddstyle = "cusDD_slick_d";
  } else if (style == "slick light") {
    ddstyle = "cusDD_slick_l";
  } else {
    ddstyle = style;
  }

  for (var i = 0; i < $(select).length; i++) {
    var curr = $($(select)[i]);
    
    //Replace select with div
    curr.addClass(ddstyle+" cusDD").changeElementType("div");
    
    //put drop downs in a container
    //Replace options with divs
    curr = $($(select)[i]);
    curr.find("option").wrapAll("<div class='cusDD_options' />");
    curr.find("option").addClass("cusDD_opt").each(function() {
      $(this).changeElementType("div");
    });
    
    //Add selector and drop down
    curr.prepend("<div class='cusDD_select'><div class='cusDD_arrow'></div></div>");
    
    //Add default option
    var def = (curr.find("div[selected='selected']").length >= 1) ? $(curr.find("div[selected='selected']")) : $(curr.find(".cusDD_opt")[0]);
    curr.find(".cusDD_select").prepend(def.text());
    
  } //End for loop

  $(document).click(function() {
    $(".cusDD_options").slideUp(200);
    $(".cusDD_arrow").removeClass("active");
  })
  
  $(select).click(function(e) {
    e.stopPropagation();
    $(this).find(".cusDD_options").slideToggle(200);
    $(this).find(".cusDD_arrow").toggleClass("active");
  })
  $(".cusDD_opt").click(function() {
    $($(this).parent()).siblings(".cusDD_select").contents()[0].nodeValue = $(this).text();
  });

  } // End function)

  (function($) {
    $.fn.changeElementType = function(newType) {
      var attrs = {};

      $.each(this[0].attributes, function(idx, attr) {
        attrs[attr.nodeName] = attr.nodeValue;
      });

      this.replaceWith(function() {
        return $("<" + newType + "/>", attrs).append($(this).contents());
      });
    };
  })(jQuery);

  /* Call the cusDD function on any select elements by ID or Class */
  $(document).ready(function() {
    cusDD(".select1");
    cusDD("#select2", "slick dark");
    cusDD("#select3", "slick light");
    cusDD("#select4", "custom");
  });

// window.onscroll = function() {
//   var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
//   var stickFooter = document.getElementById("stick-footer")
//   var infoFooter = document.getElementById("info-footer")
//   if (scrollTop >= stickFooter.offsetTop) {
//     infoFooter.style.position = "relative"
//   } else {
//     infoFooter.style.position = "fixed";
//     // cartHeader.style.marginTop = "0px";
//   }
// }