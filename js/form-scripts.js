function submitForm() {
    var e = $("#name").val(), t = $("#email").val(), s = $("#subject").val(), a = $("#message").val();
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + e + "&email=" + t + "&subject=" + s + "&message=" + a,
        success: function (e) {
            "success" == e ? formSuccess() : (formError(), submitMSG(!1, e))
        }
    })
}

function formSuccess() {
    $("#contactForm")[0].reset(), submitMSG(!0, "Message Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
        $(this).removeClass()
    }))
}

function submitMSG(e, t) {
    if (e) var s = "h3 text-center tada animated text-success"; else s = "h3 text-center text-danger";
    $("#success").removeClass().addClass(s).text(t)
}

$("#contactForm").validator().on("submit", (function (e) {
    e.isDefaultPrevented() ? (formError(), submitMSG(!1, "Did you fill in the form properly?")) : (e.preventDefault(), submitForm())
}));