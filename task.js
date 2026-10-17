const form = document.getElementById("seat-form");
const seatInput = document.getElementById("seat");
const resultInput = document.getElementById("result");
function solve() {
    const seat = Number(seatInput.value);
    if (!form.reportValidity() || !Number.isInteger(seat)) {
        resultInput.value = "Введите целое число от 1 до 54";
        return false;
    }
    let level;
    if (seat % 2 === 0) {
        level = "Верхнее";
    } else {
        level = "Нижнее";
    }
    let position;
    if (seat <= 36) {
        position = "в купе";
    } else {
        position = "боковое";
    }
    resultInput.value = level + ", " + position;
    return true;
}
document.getElementById("calculate").addEventListener("click", solve);
form.addEventListener("submit", function (event) {
    if (!solve()) {
        event.preventDefault();
    }
});
seatInput.addEventListener("input", function () {
    resultInput.value = "Нажми «Определить»";
});
