function validarFormulario() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;


	if (username.trim() == "") {
		mostrarError("username");
		return false;
	}
	

	if (password.trim() == "") {
		mostrarError("password");
	  return false;
	}


	
	} 

	function mostrarError(campo) {
		Swal.fire({
		  icon: 'error',
		  title: 'Error!',
		  text: 'Falta completar el Campo: ' + campo
		})
	  }

	  document.getElementById("botonIngresar").addEventListener("click", validarFormulario);

	  const form = document.querySelector('form');
	  form.addEventListener('submit', function(event) {
		  event.preventDefault();
		  const username = document.querySelector('#username').value;
		  const password = document.querySelector('#password').value;
		  if (username === 'usuario' && password === 'contraseña') {
			  window.location.href = 'Portal.html';
		  } else {
			  incorrecto();
		  }
	  });  

	  function incorrecto(){
		Swal.fire({
			icon: 'error',
			title: 'Error!',
			text: 'Nombre de usuario o contraseña incorrecta'
		  })
	  }
 
	  /* function guardarDatos(username, password) {
		localStorage.setItem("form", JSON.stringify({username:username, password:password}));
	  } */  

	  