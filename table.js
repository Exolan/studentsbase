(function () {
  const array = JSON.parse(localStorage.getItem("array")) || [];
  window.array = array;
  window.table = document.querySelector(".table");

  if (array != "") {
    createFilter();
    createTable(array);
  } else {
    alert("Учеников нет!");
  }

  function createFilter(table, array) {
    const filter_div = document.querySelector(".filter_div");
    const filter = document.createElement("table");
    filter.className = "filter";

    filter.append(createHead());
    filter.append(makeInput());

    filter_div.append(filter);

    filtration(table, array);
  }

  function createTable(array) {
    const table_div = document.querySelector(".table_div");
    const table = document.createElement("table");
    table.className = "table";

    table.append(createHead());
    table.append(createBody(array));

    table_div.append(table);

    filterText();
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
          const td = document.createElement("td");
          const p = document.createElement("p");
          p.textContent = array[i][j];
          td.append(p);
          tr.prepend(td);
        } else if (j == "birthDate") {
          const td = document.createElement("td");
          const p = document.createElement("p");
          const today = new Date();
          const bty = new Date(
            today.getFullYear(),
            new Date(array[i][j]).getMonth(),
            new Date(array[i][j]).getDate()
          );
          if (bty > today) {
            p.textContent = `${new Date(array[i][j]).getDate()} ${new Date(
              array[i][j]
            ).getMonth()} ${new Date(array[i][j]).getFullYear()} (${
              today.getFullYear() - new Date(array[i][j]).getFullYear() - 1
            })`;
          } else {
            p.textContent = `${array[i][j]} (${
              today.getFullYear() - new Date(array[i][j]).getFullYear()
            })`;
          }
          td.append(p);
          tr.append(td);
        } else if (j == "startYear") {
          const td = document.createElement("td");
          const p = document.createElement("p");
          if (
            (array[i][j] - new Date().getFullYear()) * -1 >= 0 &&
            (array[i][j] - new Date().getFullYear()) * -1 <= 4
          ) {
            p.textContent = `${array[i][j]}-${Number(array[i][j]) + 4} (${
              (array[i][j] - new Date().getFullYear()) * -1
            } курс)`;
          } else {
            p.textContent = `${array[i][j]}-${
              Number(array[i][j]) + 4
            } (Закончил обучение)`;
          }

          td.append(p);
          tr.append(td);
        }
      }
      const td = document.createElement("td");
      const p = document.createElement("p");
      p.textContent = fio;
      td.append(p);
      tr.prepend(td);

      tbody.append(tr);
    }
    return tbody;
  }

  function filterText() {
    const table = document.querySelector(".table");
    const th = table.querySelectorAll("th");
    const tbody = table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");

    [].forEach.call(th, (header, index) => {
      header.addEventListener("click", () => {
        sortColumn(index);
      });
    });

    function sortColumn(index) {
      // Получить текущее направление
      const direction = directions[index] || "asc";
      console.log(directions[index]);
      // Фактор по направлению
      const multiplier = direction === "asc" ? 1 : -1;

      const newRows = Array.from(rows);

      newRows.sort((rowa, rowb) => {
        const cellA = rowa.querySelectorAll("td")[index].innerHTML;
        const cellB = rowb.querySelectorAll("td")[index].innerHTML;

        const a = transform(index, cellA);
        const b = transform(index, cellB);

        switch (true) {
          case a > b:
            return 1 * multiplier;
          case a < b:
            return -1 * multiplier;
          case a === b:
            return 0;
        }
      });

      // Удалить старые строки
      [].forEach.call(rows, (row) => {
        tbody.removeChild(row);
      });

      // Поменять направление
      directions[index] = direction === "asc" ? "desc" : "asc";

      // Добавить новую строку
      newRows.forEach((newRow) => {
        tbody.appendChild(newRow);
      });
    }

    const directions = Array.from(th).map(() => {
      return "";
    });

    function transform(index, content) {
      const type = th[index].getAttribute("data-type");
      switch (type) {
        case "number":
          return parseFloat(content);
        case "string":
        default:
          return content;
      }
    }
  }

  function makeInput() {
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    tr.className = "thead_line";

    for (let i = 0; i < 4; i++) {
      const th = document.createElement("th");
      th.className = "th_filter";
      const input = document.createElement("input");

      th.append(input);
      tr.append(th);
    }

    tbody.append(tr);

    return tbody;
  }

  function filtration(table, array) {
    const filter = document.querySelector(".filter");
    const inputs = filter.querySelectorAll("input");

    [].forEach.call(inputs, (header, index) => {
      console.log(header, index);
      header.addEventListener("input", () => {
        setInterval(() => {
          let status = false;
          for (let i of inputs) {
            if (i.value == "") {
              status = true;
            } else {
              status = false;
              break;
            }
          }
          if (status == true) {
            table.append(createBody(array));
          } else {
            makeFilter(inputs, index);
          }
        }, 1000);
      });
    });
  }

  function makeFilter(th, index) {
    const table = document.querySelector(".table");
    const tbody = table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");

    const newRows = [];

    for (let i of rows) {
      if (
        String(i.querySelectorAll("td")[index].textContent).includes(
          th[index].value
        ) == true
      ) {
        newRows.push(i);
      }
    }

    [].forEach.call(rows, (row) => {
      tbody.removeChild(row);
    });

    newRows.forEach((newRow) => {
      tbody.appendChild(newRow);
    });
  }
})();
