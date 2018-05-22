//guarda el nombre del usuario
function setName() {
    var name = document.getElementById("inputName").value;
    document.getElementById("name").innerText = name;
    //esconde el area de login
    document.getElementById("login").style.display = "none";
    //hace aparecer las preguntas
    document.getElementById("wannaPlay").style.display = "block";
}

function yesPlay() {
    document.getElementById("wannaPlay").style.display = "none";
    //hace aparecer las preguntas
    document.getElementById("questionsForm").style.display = "block";
}

function noPlay() {
    document.getElementById("warningMessage").innerText = "Bueno Chao";
    document.getElementById("wannaPlay").style.display = "none";
}

function checkQuestions(form) {
    if (form.elements[0].value.toLowerCase() == "n") {
        document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No han egresado hombres</p>"
        "</div>";
    } else {
        document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No han egresado hombres</p>"
        "</div>";
    }

    if (form.elements[1].value.toLowerCase() == "n") {
        document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
        "</div>";
    } else {
        document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
        "</div>";
    }
    document.getElementById("questionsForm").style.display = "none";
    //hace aparecer las preguntas
    document.getElementById("scoreBoard").style.display = "block"
}