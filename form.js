(function () {
  const form = document.querySelector(".form");
  form.append(createName());
  form.append(createSurname());
  form.append(createLastname());
  form.append(createYear());
  form.append(startYear());
  form.append(createFaculity());
  form.append(createButton());

  function createName() {
    const name_div = document.createElement("div");
    name_div.className = "name_div";
    const name_input = document.createElement("h2");
    name_input.textContent = "Имя";
    const input = document.createElement("input");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");
    status.className = "text_check";

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else if (checkRussian(input.value) == false && input.value != "") {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите русские буквы";
      } else if (checkAlpha(input.value) == true) {
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

  function createSurname() {
    const surname_div = document.createElement("div");
    surname_div.className = "surname_div";
    const surname_input = document.createElement("h2");
    surname_input.textContent = "Фамилия";
    const input = document.createElement("input");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");
    status.className = "text_check";

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else if (checkRussian(input.value) == false && input.value != "") {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите русские буквы";
      } else if (checkAlpha(input.value) == true) {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите русские буквы";
      } else if (checkRussian(input.value) == true) {
        check_div.style.backgroundColor = "green";
        status.textContent = "Все правильно";
      }
    });

    surname_div.append(surname_input);
    surname_div.append(input);
    surname_div.append(check_div);
    surname_div.append(status);

    return surname_div;
  }

  function createLastname() {
    const lastname_div = document.createElement("div");
    lastname_div.className = "lastname_div";
    const lastname_input = document.createElement("h2");
    lastname_input.textContent = "Отчество";
    const input = document.createElement("input");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");
    status.className = "text_check";

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else if (checkRussian(input.value) == false && input.value != "") {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите русские буквы";
      } else if (checkAlpha(input.value) == true) {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите русские буквы";
      } else if (checkRussian(input.value) == true) {
        check_div.style.backgroundColor = "green";
        status.textContent = "Все правильно";
      }
    });

    lastname_div.append(lastname_input);
    lastname_div.append(input);
    lastname_div.append(check_div);
    lastname_div.append(status);

    return lastname_div;
  }

  function createYear() {
    const year_div = document.createElement("div");
    year_div.className = "year_div";
    const year_input = document.createElement("h2");
    year_input.textContent = "Дата рождения";
    const input = document.createElement("input");
    input.setAttribute("type", "date");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");
    status.className = "text_check";

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else {
        check_div.style.backgroundColor = "green";
        status.textContent = "Все правильно";
        console.log(input.value);
      }
    });

    year_div.append(year_input);
    year_div.append(input);
    year_div.append(check_div);
    year_div.append(status);

    return year_div;
  }

  function startYear() {
    const startyear_div = document.createElement("div");
    startyear_div.className = "startyear_div";
    const startyear_input = document.createElement("h2");
    startyear_input.textContent = "Начало обучения";
    const input = document.createElement("input");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");
    status.className = "text_check";

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else if (checkNum(input.value) == false && input.value != "") {
        if (input.value.length == 4 && checkStartyear(input.value) == true) {
          check_div.style.backgroundColor = "green";
          status.textContent = "Все правильно";
        } else {
          check_div.style.backgroundColor = "red";
          status.textContent =
            "Неправильный формат года (с 2000 по текущий год)";
        }
      } else if (checkNum(input.value) == true) {
        check_div.style.backgroundColor = "red";
        status.textContent = "Введите цифры";
      }
    });

    startyear_div.append(startyear_input);
    startyear_div.append(input);
    startyear_div.append(check_div);
    startyear_div.append(status);

    return startyear_div;
  }

  function createFaculity() {
    const faculity_div = document.createElement("div");
    faculity_div.className = "faculity_div";
    const faculity_input = document.createElement("h2");
    faculity_input.textContent = "Факультет";
    const input = document.createElement("input");
    const check_div = document.createElement("div");
    check_div.className = "check";
    const status = document.createElement("p");
    status.className = "text_check";

    input.addEventListener("input", () => {
      if (input.value === "") {
        check_div.style.backgroundColor = "transparent";
        status.textContent = "";
      } else {
        check_div.style.backgroundColor = "green";
        status.textContent = "Все правильно";
      }
    });
    faculity_div.append(faculity_input);
    faculity_div.append(input);
    faculity_div.append(check_div);
    faculity_div.append(status);

    return faculity_div;
  }

  function createButton() {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Добавить";

    button.addEventListener("click", () => {
      const flags = document.querySelectorAll(".check");
      const text = document.querySelectorAll(".text_check");
      console.log(flags);
      let status = true;
      for (let i = 0; i < flags.length; i++) {
        if (flags[i].style.backgroundColor == "") {
          status = false;
          flags[i].style.backgroundColor = "red";
          text[i].innerText = "Поле не заполнено";
        } else if (flags[i].style.backgroundColor == "red") {
          status = false;
        }
      }
      if (status == true) {
        let oldArray = JSON.parse(localStorage.getItem("array")) || [];
        let newArray = document.querySelectorAll("input");
        oldArray.push({
          name: newArray[0].value,
          surname: newArray[1].value,
          lastname: newArray[2].value,
          birthDate: new Date(newArray[3].value),
          startYear: newArray[4].value,
          faculty: newArray[5].value,
        });
        localStorage.setItem("array", JSON.stringify(oldArray));
        alert("Ученик добавлен");
        location.reload();
      }
    });

    return button;
  }

  ///////////////////////////////////////////////

  function checkRussian(text) {
    return /[а-я]/i.test(text);
  }

  function checkAlpha(text) {
    return /\d/.test(text);
  }

  // function checkYears(year) {
  //   if (new Date(year) > new Date(1990, 1, 1) && new Date(year) < new Date()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  function checkNum(year) {
    return isNaN(Number(year));
  }

  function maskDate(year) {
    const length = year.length;
    const regex = /(\d{0,4})(\d{0,2})(\d{0,2})/;
    if (length < 2) {
      return year;
    }
    if (length <= 3) {
      return year.replace(regex, "$1-$2");
    }
    return year.replace(regex, "$1-$2-$3");
  }

  function checkStartyear(year) {
    if (parseInt(year) >= 2000 && parseInt(year) <= new Date().getFullYear()) {
      return true;
    } else {
      return false;
    }
  }
})();
