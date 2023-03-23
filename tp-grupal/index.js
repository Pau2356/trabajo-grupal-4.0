function validarFormulario() {
    var nombre = document.getElementById("a");
    var apellido = document.getElementById("b");
    var edad = document.getElementById("c");
    var dni = document.getElementById("d");
    var email = document.getElementById("f");
  
    if (nombre.length < 2 || nombre.length > 20) {
      alert("El nombre debe tener entre 2 y 20 caracteres.");
      return false;
    }
  
    if (apellido.length < 2 || apellido.length > 25) {
      alert("El apellido debe tener entre 2 y 25 caracteres.");
      return false;
    }
  
    if (edad < 18 || edad > 120 || isNaN(edad)) {
      alert("La edad debe ser un número entre 18 y 120.");
      return false;
    }
  
    if (dni.length <= 6) {
      alert("El DNI debe tener más de 6 caracteres.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("El correo electrónico debe incluir '@'.");
      return false;
    }
  
    agregarDatosTabla(nombre, apellido, edad, dni, email);
  
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    document.getElementById("f").value = "";
  }
  
  function agregarDatosTabla(nombre, apellido, edad, dni, email) {
    var tabla = document.querySelector("table");
    var fila = tabla.insertRow();
    var celdaNombre = fila.insertCell();
    var celdaApellido = fila.insertCell();
    var celdaEdad = fila.insertCell();
    var celdaDni = fila.insertCell();
    var celdaEmail = fila.insertCell();
  
    celdaNombre.innerText = nombre;
    celdaApellido.innerText = apellido;
    celdaEdad.innerText = edad;
    celdaDni.innerText = dni;
    celdaEmail.innerText = email;
  }