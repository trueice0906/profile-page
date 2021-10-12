$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $('nav').addClass('shadow-header');
    } else {
        $('nav').removeClass('shadow-header');
    }
});
// fade in effect //
function isVisible(element) {
  let elementBox = element.getBoundingClientRect();
  let distanceFromTop = -250;

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
}

function scrollDoc() {
  let sectionList = document.querySelectorAll('.hidden');
  sectionList.forEach(function(section) {
    if(isVisible(section)) {
      section.classList.remove('hidden');
    };
  })
}

window.addEventListener("scroll",scrollDoc);

// fade out effect //
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });
