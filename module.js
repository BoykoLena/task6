if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

function init () {
    var userName = document.querySelector("input[name='userName']");
    var email = document.querySelector("input[name='email']");
    var zipCode = document.querySelector("input[name='zip']");
    userName.addEventListener("change", nameOnChange);
    email.addEventListener("change", emailOnChange);
    zipCode.addEventListener("change", zipcodeOnChange);
    form1.onsubmit = onsubmitHandler;
}

function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    }
    else {
        elem.className = "valid";
    }
}

function nameOnChange() {
    var pattern = /\S/;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{5}/;
    validate(this, pattern);
}

function onsubmitHandler(event) {
    var invalid;
    for (var i = 0; i < form1.elements.length - 1; ++i) {
        if (form1.elements[i].type === "text" && form1.elements[i].className === "valid") {
        } else {
            form1.elements[i].className = "invalid"
            invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        event.preventDefault();
        return false;
    }
}