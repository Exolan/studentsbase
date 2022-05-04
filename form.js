(function () {
  const form = document.querySelector(".form");
  form.append(createName());

  function createName() {
    const name_div = document.createElement("div");
    name_div.className = "name_div";
    const name_input = document.createElement("h2");
    name_input.textContent = "Имя";
    const input = document.createElement("input");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else if (checkRussian(input.value) == false && input.value != "") {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите русские буквы";
      } else if (checkRussian(input.value) == true) {
        check_div.style.backgroundColor = "green";
        status.textContent = "Все правильно";
      }
    });

    name_div.append(name_input);
    name_div.append(input);
    name_div.append(check_div);
    name_div.append(status);

    return name_div;
  }

  function checkRussian(text) {
    return /[а-я]/i.test(text);
  }

  function checkYears(year) {}
})();
