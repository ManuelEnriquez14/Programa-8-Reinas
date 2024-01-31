var reinasPorColocar = 8;
var reinasColoca1 = 0;
function colocarReina(celda) {
  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColoca1 < 8) {
      celda.style =
        "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;

      //Bloqueamos renglon
      var tablero = document.getElementById("tabla");
      //alert(renglon + ", " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          tablero.rows[renglon].cells[i].style.backgroundColor = "#FF0000";
        }

        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          tablero.rows[i].cells[columna].style.backgroundColor = "#FF0000";
        }
      }

      //Recorremos diagonal superior derecha
      var r = renglon,
        c = columna;

      while (r >= 0 && c < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#FF0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        if (
          tablero.rows[renglon].cells[columna].setAttribute(
            "onclick",
            "colocarReina(this)"
          )
        );
        tablero.rows[r].cells[c].style.backgroundColor = "none";

        r--;
        c++;
      }
      //Recorremos diagonal superior derecha

      (r = renglon + 1), (c = columna - 1);

      while (c >= 0 && r < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#FF0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        if (
          tablero.rows[renglon].cells[columna].setAttribute(
            "onclick",
            "colocarReina(this)"
          )
        );
        tablero.rows[r].cells[c].style.backgroundColor = "none";

        r++;
        c--;
      }
      //Recorremos diagonal inferior izquierda

      (r = renglon), (c = columna);

      while (c >= 8 && r < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#FF0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        if (
          tablero.rows[renglon].cells[columna].setAttribute(
            "onclick",
            "colocarReina(this)"
          )
        );
        tablero.rows[r].cells[c].style.backgroundColor = "none";

        r++;
        c--;
      }
      //Recorremos diagonal inferior derecha

      (r = renglon - 1), (c = columna - 1);

      while (c >= 0 && r >= 0) {
        tablero.rows[r].cells[c].style.backgroundColor = "#FF0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");

        if (
          tablero.rows[renglon].cells[columna].setAttribute(
            "onclick",
            "colocarReina(this)"
          )
        );
        tablero.rows[r].cells[c].style.backgroundColor = "none";

        r--;
        c--;
      }
      //Recorremos diagonal superior izquierda

      (r = renglon), (c = columna);

      while (c < 8 && r < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#FF0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        if (
          tablero.rows[renglon].cells[columna].setAttribute(
            "onclick",
            "colocarReina(this)"
          )
        );
        tablero.rows[r].cells[c].style.backgroundColor = "none";

        r++;
        c++;
      }

      reinasPorColocar--;
      reinasColoca1++;
    }
  } else {
    celda.style = "background-image: none";

    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;

    //Bloqueamos renglon
    var tablero = document.getElementById("tabla");
    //alert(renglon + ", " + columna);
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute(
        "onclick",
        "colocarReina(this)"
      );
      tablero.rows[i].cells[columna].setAttribute(
        "onclick",
        "colocarReina(this)"
      );
    }

    reinasPorColocar++;
    reinasColoca1--;

    (r = renglon), (c = columna);

    while (c < 8 && r < 8) {
      tablero.rows[r].cells[c].style = "Background-color: none";
      tablero.rows[r].cells[c].removeAttribute("onclick");
      if (
        tablero.rows[renglon].cells[columna].setAttribute(
          "onclick",
          "colocarReina(this)"
        )
      );
      tablero.rows[r].cells[c].style.backgroundColor = "none";

      r++;
      c++;
    }

    reinasPorColocar--;
    reinasColoca1++;

    var r = renglon,
      c = columna;

    while (r >= 0 && c < 8) {
      tablero.rows[r].cells[c].style = "Background-color: none";
      tablero.rows[r].cells[c].removeAttribute("onclick");
      if (
        tablero.rows[renglon].cells[columna].setAttribute(
          "onclick",
          "colocarReina(this)"
        )
      );
      tablero.rows[r].cells[c].style.backgroundColor = "none";

      r--;
      c++;
    }
    //Recorremos diagonal superior derecha

    (r = renglon + 1), (c = columna - 1);

    while (c >= 0 && r < 8) {
      tablero.rows[r].cells[c].style = "Background-color: none";
      tablero.rows[r].cells[c].removeAttribute("onclick");
      if (
        tablero.rows[renglon].cells[columna].setAttribute(
          "onclick",
          "colocarReina(this)"
        )
      );
      tablero.rows[r].cells[c].style.backgroundColor = "none";

      r++;
      c--;
    }
    //Recorremos diagonal inferior izquierda

    (r = renglon), (c = columna);

    while (c >= 8 && r < 8) {
      tablero.rows[r].cells[c].style = "Background-color: none";
      tablero.rows[r].cells[c].removeAttribute("onclick");
      if (
        tablero.rows[renglon].cells[columna].setAttribute(
          "onclick",
          "colocarReina(this)"
        )
      );
      tablero.rows[r].cells[c].style.backgroundColor = "none";

      r++;
      c--;
    }
    //Recorremos diagonal inferior derecha

    (r = renglon - 1), (c = columna - 1);

    while (c >= 0 && r >= 0) {
      tablero.rows[r].cells[c].style = "Background-color: none";
      tablero.rows[r].cells[c].removeAttribute("onclick");

      if (
        tablero.rows[renglon].cells[columna].setAttribute(
          "onclick",
          "colocarReina(this)"
        )
      );
      tablero.rows[r].cells[c].style.backgroundColor = "none";

      r--;
      c--;
    }

    for (let i = 0; i < 8; i++) {
      if (columna != i) {
        tablero.rows[renglon].cells[i].style = "Background-color: none";
      }

      if (renglon != i) {
        tablero.rows[i].cells[columna].style = "Background-color: none";
      }
    }
  }

  document.getElementById("reinasColoca").innerHTML =
    "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColocadas").innerHTML =
    "Reinas colocadas: " + reinasColoca1;
}

function Limpiar() {
  location.reload(); // Esta función recarga la página actual
}
