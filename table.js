(function () {
  const array = JSON.parse(localStorage.getItem("array")) || [];

  if (array != []) {
    createTable(array);
  } else {
    alert("Учеников нет!");
  }

  function createTable(array) {
    const table_div = document.querySelector(".table_div");
    const table = document.createElement("table");
    table.className = "table";

    table.append(createHead());
    table.append(createBody(array));

    table_div.append(table);
  }

  function createHead() {
    const thead = document.createElement("thead");

    const tr = document.createElement("tr");
    tr.className = "thead_line";

    for (let i = 0; i < 4; i++) {
      const th = document.createElement("th");
      const p = document.createElement("p");
      p.id = i;
      switch (i) {
        case 0:
          p.innerText = "ФИО";
          break;
        case 1:
          p.innerText = "Факультет";
          break;
        case 2:
          p.innerText = "ДР и возраст";
          break;
        case 3:
          p.innerText = "Год обучения и номер курса";
          break;
      }
      th.append(p);
      tr.append(th);
    }
    thead.append(tr);

    return thead;
  }

  function createBody(array) {
    const tbody = document.createElement("tbody");
    for (let i in array) {
      const tr = document.createElement("tr");
      tr.className = "thead_line";

      let fio = "";

      for (let j in array[i]) {
        if (j == "surname" || j == "name" || j == "lastname") {
          fio += array[i][j] + " ";
        } else if (j == "faculty") {
          const th = document.createElement("th");
          const p = document.createElement("p");
          p.textContent = array[i][j];
          th.append(p);
          tr.prepend(th);
        } else if (j == "birthDate") {
          const th = document.createElement("th");
          const p = document.createElement("p");
          const today = new Date();
          const bty = new Date(
            today.getFullYear(),
            new Date(array[i][j]).getMonth(),
            new Date(array[i][j]).getDate()
          );
          if (bty > today) {
            p.textContent = `${array[i][j]} (${
              today.getFullYear() - new Date(array[i][j]).getFullYear() - 1
            })`;
          } else {
            p.textContent = `${array[i][j]} (${
              today.getFullYear() - new Date(array[i][j]).getFullYear()
            })`;
          }
          th.append(p);
          tr.append(th);
        } else if (j == "startYear") {
          const th = document.createElement("th");
          const p = document.createElement("p");
          p.textContent = `${array[i][j]}-${Number(array[i][j]) + 4}`;
          th.append(p);
          tr.append(th);
        }
      }
      const th = document.createElement("th");
      const p = document.createElement("p");
      p.textContent = fio;
      th.append(p);
      tr.prepend(th);

      tbody.append(tr);
    }
    return tbody;
  }
})();
