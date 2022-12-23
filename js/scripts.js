



$('.progress-col').each((_, progress) => {
    const steps = $('> div.right > div', progress);
    steps.each((i, el) => $(el).click(e => onClick(el)));
    const onClick = (el) => {
        steps.removeClass(['current', 'prev']);
        el.classList.add('current');
        $(el).prevAll().slice(0).addClass('prev');
    };
});

$(document).ready(function () {
    $('input[type="radio"]:exampleRadios').click(function () {
        var inputValue = $(this).attr("value");
        alert(inputValue);
    });

});




$(document).ready(function () {
    $('.progress-col .overlay-link').click(function () {
        var target_id = $(this).attr('data-target-id')
        $('html, body').animate({
            scrollTop: $("#" + target_id).offset().top - 120
        }, 100);
    });
});

function addActive(e) {
    if (e.checked) {
        $("#collapseOne").removeClass("active");
    }
    else {
        $("#collapseOne").addClass("active");
    }
};
function addActive1(f) {
    if (f.checked) {
        $("#collapse2").addClass("active");
    }
    else {
        $("#collapse2").removeClass("active");
    }
};
function addActive2(g) {
    if (g.checked) {
        $("#collapse3").addClass("active");
    }
    else {
        $("#collapse3").removeClass("active");
    }
};
function addActive3(h) {
    if (h.checked) {
        $("#collapse3").addClass("active");
    }
    else {
        $("#collapse3").removeClass("active");
    }
};
function addActive4(i) {
    if (i.checked) {
        $("#collapse4").addClass("active");
    }
    else {
        $("#collapse4").removeClass("active");
    }
};
function addActive5(q) {
    if (q.checked) {
        $("#collapse5").addClass("active");
    }
    else {
        $("#collapse5").removeClass("active");
    }
};
function addActive6(w) {
    if (w.checked) {
        $("#collapse6").addClass("active");
    }
    else {
        $("#collapse6").removeClass("active");
    }
};
function addActive7(e) {
    if (e.checked) {
        $("#collapse7").addClass("active");
    }
    else {
        $("#collapse7").removeClass("active");
    }
};
function addActive8(r) {
    if (r.checked) {
        $("#collapse8").addClass("active");
    }
    else {
        $("#collapse8").removeClass("active");
    }
};
function addActive9(s) {
    if (s.checked) {
        $("#collapse9").addClass("active");
    }
    else {
        $("#collapse9").removeClass("active");
    }
};
function addActive10(t) {
    if (t.checked) {
        $("#collapse10").addClass("active");
    }
    else {
        $("#collapse10").removeClass("active");
    }
};
function addActive11(x) {
    if (x.checked) {
        $("#collapse11").addClass("active");
    }
    else {
        $("#collapse11").removeClass("active");
    }
};


function addActive2(g) {
    if (g.checked) {
        $("#collapse3").addClass("active");
    }
    else {
        $("#collapse3").removeClass("active");
    }
};

/*var header = document.getElementById("myDIV");
var row = header.getElementsByClassName("listrow");
for (var i = 0; i < row.length; i++) {
  row[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}*/

/*function Active1(a){
  if(a.checked){
    $("#AddActive1").addClass("active");
  }      
  else{
    $("#AddActive1").removeClass("active");
  }
};


function Active2(b){
  if(b.checked){
    $("#AddActive2").addClass("active");
  }      
  else{
    $("#AddActive2").removeClass("active");
  }
};


function Active3(c){
  if(c.checked){
    $("#AddActive").addClass("active");
  }      
  else{
    $("#AddActive3").removeClass("active");
  }
};


function Active4(d){
  if(d.checked){
    $("#AddActive4").addClass("active");
  }      
  else{
    $("#AddActive4").removeClass("active");
  }
};*/

function addShow(t) {
    if (t.checked) {
        $("#option-fields .custom-show").addClass("show");
    }
    else {
        $("#option-fields .custom-show").removeClass("show");
    }
};
function addShow2(t) {
    if (t.checked) {
        $("#option-fields .custom2-show").addClass("show");
    }
    else {
        $("#option-fields .custom2-show").removeClass("show");
    }
};
function addShow3(t) {
    if (t.checked) {
        $(" .custom3-show").addClass("show");
    }
    else {
        $(".custom3-show").removeClass("show");
    }
};

function addShow4(t) {
    if (t.checked) {
        $(" .custom4-show").addClass("show");
    }
    else {
        $(".custom4-show").removeClass("show");
    }
};
function addShow5(t) {
    if (t.checked) {
        $(" .custom5-show").addClass("show");
    }
    else {
        $(".custom5-show").removeClass("show");
    }
};
function addShow6(t) {
    if (t.checked) {
        $(" .custom6-show").addClass("show");
    }
    else {
        $(".custom6-show").removeClass("show");
    }
};

function addShow7(t) {
    if (t.checked) {
        $(" .custom7-show").addClass("show");
    }
    else {
        $(".custom7-show").removeClass("show");
    }
};

function addShow8(t) {
    if (t.checked) {
        $(" .custom8-show").addClass("show");
    }
    else {
        $(".custom8-show").removeClass("show");
    }
};

function addShow9(t) {
    if (t.checked) {
        $(" .custom9-show").addClass("show");
    }
    else {
        $(".custom9-show").removeClass("show");
    }
};

function addShow10(t) {
    if (t.checked) {
        $(" .custom10-show").addClass("show");
    }
    else {
        $(".custom10-show").removeClass("show");
    }
};

function addShow11(t) {
    if (t.checked) {
        $(" .custom11-show").addClass("show");
    }
    else {
        $(".custom11-show").removeClass("show");
    }
};

function addShow12(t) {
    if (t.checked) {
        $(" .custom12-show").addClass("show");
    }
    else {
        $(".custom12-show").removeClass("show");
    }
};

$(".custom-accordion").click(function () {
    $(".owner-detail").slideToggle("slow");
});







$(document).ready(function () {
    $('.input-radio-wire1').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-wire1").not(targetBox).hide();
        $(targetBox).show();
    });



    $('.input-radio-wire2').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-wire2").not(targetBox).hide();
        $(targetBox).show();
    });



    $('.input-radio-wire3').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-wire3").not(targetBox).hide();
        $(targetBox).show();
    });



    $('.input-radio-wire4').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-wire4").not(targetBox).hide();
        $(targetBox).show();
    });



    $('.input-radio-wire5').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-wire5").not(targetBox).hide();
        $(targetBox).show();
    });



    $('.input-radio-wire6').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-wire6").not(targetBox).hide();
        $(targetBox).show();
    });






    $('.input-radio').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box").not(targetBox).hide();
        $(targetBox).show();
    });

    $('.input-radio2').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box2").not(targetBox).hide();
        $(targetBox).show();
    });


    $('.input-radio3').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box3").not(targetBox).hide();
        $(targetBox).show();
    });


    $('.input-radio4').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box4").not(targetBox).hide();
        $(targetBox).show();
    });


    $('.input-radio5').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box5").not(targetBox).hide();
        $(targetBox).show();
    });


    $('.input-radio6').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box6").not(targetBox).hide();
        $(targetBox).show();
    });


    $('.input-radio7').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box7").not(targetBox).hide();
        $(targetBox).show();
    });

    $('.input-radio8').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box8").not(targetBox).hide();
        $(targetBox).show();
    });

    $('.input-radio9').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box9").not(targetBox).hide();
        $(targetBox).show();
    });

    $('.input-radio10').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box10").not(targetBox).hide();
        $(targetBox).show();
    });

    $('.input-radio11').click(function () {
        var inputValue = $(this).attr("data-work");
        var targetBox = $("." + inputValue);
        $(".radio-box11").not(targetBox).hide();
        $(targetBox).show();
    });
});

$(function () { // wait for document to load 
    $('#T7').MultiFile({
        list: '#T7-list'
    });

});
$(function () { // wait for document to load 
    $('#T8').MultiFile({
        list: '#T8-list'
    });

});
$(function () { // wait for document to load 
    $('#T9').MultiFile({
        list: '#T9-list'
    });

});
$(function () { // wait for document to load 
    $('#T6').MultiFile({
        list: '#T6-list'
    });


    $("#no_of_conduits").focusout(function () {
        var conduitsHtml = "";
        var no_of_conduits = $("#no_of_conduits").val();
        if (no_of_conduits > 0) {
            for (i = 1; i <= no_of_conduits; i++) {
                conduitsHtml += "<div class='card mb-4'>" +
                    "<div class='card-header  bg-transparent p-0'>" +
                    "<a class='p-3 d-block' data-bs-toggle='collapse' href='#collapseExample" + i + "' role='button' aria-expanded='false' aria-controls='collapseExample'>Conduit #" + i + " details:</a>" +
                    "</div>" +
                    "<div class='card-body collapse show' id='collapseExample" + i + "'>" +
                    "<div class='row'>" +
                    "<div class='col-md-12 mb-3'>" +
                    "<div class=''>" +
                    "<label for='' class='form-label'>Number of cables or lines in each conduit:</label>" +
                    "<input type='number' class='form-control' id=''>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class=' row'>" +
                    "<div class='col-md-12 mb-3'>" +
                    "<div class=''>" +
                    "<label for='' class='form-label'>Number of conductors in each cable or line:</label>" +
                    "<input type='number' class='form-control' id=''>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class=' row'>" +
                    "<div class='col-md-6 mb-3'>" +
                    "<div class=''>" +
                    "<label for='' class='form-label'>Encasement Material:</label>" +
                    "<input type='text' class='form-control' id=''>" +
                    "</div>" +
                    "</div>" +
                    "<div class='col-md-6 mb-3'>" +
                    "<div class=''>" +
                    "<label for='' class='form-label'>Outside diameter:</label>" +
                    "<input type='text' class='form-control' id=''>" +
                    "</div>" +
                    "</div>" +
                    "</div>	" +
                    "<div class='row'>" +
                    "<div class='col-md-6 mb-3'>" +
                    "<div class=''>" +
                    "<label for='' class='form-label'>Wall thickness:</label>" +
                    "<input type='text' class='form-control' id=''>" +
                    "</div>" +
                    "</div>" +
                    "<div class='col-md-6  mb-3'>" +
                    "<label for='' class='form-label'>Wireline voltage:</label>" +
                    "<div class='input-group'>" +
                    "<input type='number' class='form-control px-2' id=''>" +
                    "<span class='input-group-text bg-light  text-white'>Volt</span>" +
                    "</div>" +
                    "</div>" +
                    "</div>	" +
                    "<div class='row'>" +
                    "<div class='col-md-6 mb-3'>" +
                    "<label for='' class='form-label'>Bury depth from base of rail to top of casing:</label>" +
                    "<div class='input-group'>" +
                    "<input type='number' class='form-control px-2' id=''>" +
                    "<span class='input-group-text bg-light  text-white'>Feet</span>" +
                    "</div>" +
                    "</div>" +
                    "<div class='col-md-6 mb-3'>" +
                    "<label for='' class='form-label'>Bury depth below ditches:</label>" +
                    "<div class='input-group'>  " +
                    "<input type='number' class='form-control px-2' id=''>" +
                    "<span class='input-group-text bg-light  text-white'>Feet</span>" +
                    "</div>" +
                    "</div>" +
                    "</div>  " +
                    "<div class='row'>" +
                    "<div class='col-md-12  mb-3'>" +
                    "<label for='' class='form-label'>Minimum depth on the NCRR Corridor but not beneath tracks:</label>" +
                    "<div class='input-group'>" +
                    "<input type='number' class='form-control px-2' id='' >" +
                    "<span class='input-group-text bg-light  text-white'>Feet</span>" +
                    "</div>" +
                    "</div>" +

                    "</div> " +
                    "</div> " +
                    "</div>";
            }
            $("#conduits").html(conduitsHtml);
        }
    });

});

document.getElementById("copyButton1").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget1"));
});

document.getElementById("copyButton2").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget2"));
});

document.getElementById("copyButton3").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget3"));
});

document.getElementById("copyButton4").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget4"));
});

document.getElementById("copyButton5").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget5"));
});

document.getElementById("copyButton6").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget6"));
});

document.getElementById("copyButton7").addEventListener("click", function () {
    copyToClipboard(document.getElementById("copyTarget7"));
});


function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}