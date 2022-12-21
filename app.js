// MODAL
$(".close").on("click", function () {
  $(".pop-up").addClass("hide");
});

// TITLE
$(".btn-warning").on("click", function () {
  $(".first-block").toggleClass("hide");
});

// БЛОКИ МЕНЯЮТСЯ МЕСТАМИ
$(".btn-success").on("click", function () {
  $(".wrapper").toggleClass("shuffle");
});

// FORM

$(document).ready(function () {
  $("#send").click(function (event) {
    var formData = {
      first: $("#input-1").val(),
      second: $("#input-2").val(),
      selectChoice: $("#selectChoice").val(),
    };

    $.ajax({
      type: "POST",
      url: "form-results.js",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#send").click(function (e) {
    e.preventDefault();
    let addFirstValue = $("#selectChoice").val();
    let addSecondValue = $("#input-1").val();
    let addThirdValue = $("#input-2").val();
    $("ul").append(
      "<li>" +
        addFirstValue +
        "</li>" +
        "<li>" +
        addSecondValue +
        "</li>" +
        "<li>" +
        addThirdValue +
        "</li>"
    );
    $("#input-1").val("");
    $("#input-2").val("");
    $("#selectChoice").val("1");
  });
});
