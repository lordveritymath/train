function translatePassport() {
    const surname = document.getElementById("surname");
    const firstName = document.getElementById("first-name");
    const ssurname = document.getElementById("ssurname");
    const button = document.getElementById("translate");

    if (surname.innerText === "Голубчиков") {
        surname.innerText = "Golubchikov";
        firstName.innerText = "Zakhar";
        ssurname.innerText = "BLABLABLA";
        button.innerText = "Заменить на кириллицу";
    } else {
        surname.innerText = "Голубчиков";
        firstName.innerText = "Захар";
        ssurname.innerText = "??"
        button.innerText = "Заменить на латиницу";
    }
}

document.getElementById("translate").addEventListener("click", translatePassport);
