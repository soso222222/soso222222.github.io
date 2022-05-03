// common script
document.addEventListener("DOMContentLoaded", function(){
// document.addEventListener("load", function(){
    preventDefaultAnchor();
});


function preventDefaultAnchor() {
  document.querySelectorAll('a[href="#"]').forEach(function (el, i) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
    });
  });
}

// common
function addClass(element, className) {
    if (element != undefined && element.length > 1) {
      element.forEach(function (element, i) {
        addSingleClass(element, className);
      });
    } else {
      addSingleClass(element, className);
    }
  
    function addSingleClass(el, className) {
      var oldClassName = el.getAttribute('class');
      var result = '';
      
      if (oldClassName === null || oldClassName === '') {
        //클래스 자체가 없을 경우
        if (className === '') return false;
        else result = className;
      } else if (oldClassName.indexOf(className) > -1 || className.trim() == '') {
        return false;
      } else if (oldClassName != undefined) {
        if (className.trim() != '') {
          result = oldClassName + ' ' + className;
        }
      } else {
        return;
      }
      el.setAttribute('class', result);
    }
  }
  function removeClass(element, className) {
    if (element != undefined && element.length > 1) {
      element.forEach(function (element, i) {
        removeSingleClass(element, className);
      });
    } else {
      removeSingleClass(element, className);
    }
  
    function removeSingleClass(el, className) {
      var oldClassName = el.getAttribute('class');
      var result = '';
      if (oldClassName != undefined && oldClassName != '') {
        if (oldClassName.indexOf(' ' + className) > -1) { //2번째 이후 class 처리
          result = oldClassName.replace(' ' + className, '');
        } else if(className.trim() != '') {
          result = oldClassName.replace(className, '');
        }
        el.setAttribute('class', result);
      }
    }
  }
  function hasClass(el, className) {
    var str = el.getAttribute('class');
    if (str === null) return true;
    if (str.indexOf(className) > -1) return true;
    else return false;
  }
  //children요소 tag있는지 검색
  function hasTagName(el, keyword) {
    var elChildren = el.children;
    var result = false;
    if (elChildren != undefined && elChildren.length > 1) {
      Array.from(elChildren).forEach(function (el, i) {
        if (hasSingleTagName(el, keyword)) return result;
      });
    } else {
      if (hasSingleTagName(el, keyword)) return result;
    }
    return result;
  
    function hasSingleTagName(el, keyword) {
      if ((el.tagName.toLowerCase()).indexOf(keyword) > -1) result = true;
    }
  }