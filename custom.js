  var v = 0;
    function s1() {
      if (v == 0) {
        document.getElementById("cl").innerHTML = "&#88;";
        v = 1;
      }
      else {
        document.getElementById("cl").innerHTML = "&#9776";
        v = 0;
      }
    }
    $(document).ready(function () {
      $('#about').animate({ opacity: 0.3 }, "fast");
      $('#about').animate({ opacity: 0.5 }, 1000);
      $('#about').animate({ opacity: 1 }, 1000);
    });