$(function () {
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitSuccess: function (b, c) {
      if (!b.attr("action")) {
        c.preventDefault();
        var e = a(b);
        var d = {};
        b.find("input, textarea, option:selected").each(function (h) {
          var g = $(this).val();
          var f = $(this).attr("id");
          if ($(this).is(":checkbox")) {
            g = $(this).is(":checked");
          } else {
            if ($(this).is(":radio")) {
              g = $(this).val() + " = " + $(this).is(":checked");
            } else {
              if ($(this).is("option:selected")) {
                f = $(this).parent().attr("id");
              }
            }
          }
          d[f] = g;
        });
        $.ajax({
          url: e,
          type: "POST",
          data: d,
          cache: false,
          success: function () {
            if (b.is("[success-msg]")) {
              b.append(
                "<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" +
                  b.attr("success-msg") +
                  "</strong></div></div>"
              );
            } else {
              window.location.replace(b.attr("success-url"));
            }
            b.trigger("reset");
          },
          error: function () {
            if ($("#form-alert").length == 0) {
              b.append(
                "<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" +
                  b.attr("fail-msg") +
                  "</strong></div></div>"
              );
            }
          },
        });
      }
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  function a(b) {
    var c = "./includes/" + b.attr("id") + ".php";
    if (b.attr("template-path")) {
      c = b.attr("template-path") + "/includes/" + b.attr("id") + ".php";
    }
    return c;
  }
});
