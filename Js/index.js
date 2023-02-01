/// funcion para realizar la animacion de la barra de progreso circular
function updateProgressBar(id, initialValue, finalValue, speed)
{
    let progressbar = document.querySelector(`#${id}`);
    let progress = setInterval(() =>
    {
        initialValue++;

        progressbar.style.background = `conic-gradient(#0D6EFD ${initialValue * 3.6}deg, #0f1338 0deg)`;

        if(initialValue == finalValue)
        {
            clearInterval(progress);
        }

    }, speed
    )
};


/// funcion para ejecutar volteo de las cartas en portafolio

let flipcards = document.querySelectorAll(".cards");

for (let i = 0; i < flipcards.length; i++) {
  flipcards[i].addEventListener("click", function () {
    if (flipcards[i].classList.contains("is_flip")) {
      flipcards[i].classList.remove("is_flip");
      return;
    }
    for (let j = 0; j < flipcards.length; j++) {
      flipcards[j].classList.remove("is_flip");
    }
    flipcards[i].classList.add("is_flip");
  });
}


/// esta funcion sirve para verificar la posicion del scroll en la pagina y dependiendo de donde se encuentre ejecutara la animacion de las barras de la seccion skills 

let activado = true
window.addEventListener("scroll", function()
{
    const scrollnow =window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;document.body.scrollTop
    const windowWidth = window.innerWidth;
    if(scrollnow > 1112 && scrollnow < 2385 && windowWidth > 480)
    {
      agregarClases();
      if(activado == true)
      {
        updateProgressBar("curiosity", 0, 90, 20)
        updateProgressBar("creative", 0, 80, 20)
        updateProgressBar("teamwork", 0, 85, 20)
        updateProgressBar("leadership", 0, 70, 20)
        activado = false
        console.log(activado)
      }
    }
    else if(scrollnow > 1610 && scrollnow < 3090 && windowWidth <= 480)
    {
      agregarClases();
      if(activado == true)
      {
        updateProgressBar("curiosity", 0, 90, 20)
        updateProgressBar("creative", 0, 80, 20)
        updateProgressBar("teamwork", 0, 85, 20)
        updateProgressBar("leadership", 0, 70, 20)
        activado = false
        console.log(activado)
      }
    }
    else
    {
      quitarClases();
      activado = true
    }
})

/// agrega la clase pruebaBar a cada elemento en orden que tiene el id prueba o se lo quita. sirve para el diseño de las barras de progreso lineal

function agregarClases() {
  const pruebas = document.querySelectorAll('#prueba');
  
  for (let i = 0; i < pruebas.length; i++) {
    pruebas[i].classList.add('pruebaBar' + (i + 1));
  }
}

function quitarClases() {
  const pruebas = document.querySelectorAll('#prueba');
  
  for (let i = 0; i < pruebas.length; i++) {
    pruebas[i].classList.remove('pruebaBar' + (i + 1));
  }
}

///esta funcion sirve para efectuar la animacion de modo oscuro o modo claro

darkLight= document.getElementById("darkLightButton");
dark = document.getElementById("dark")
let active = true
darkLight.addEventListener("click", function()
{
  if(active)
  {
    darkLight.classList.remove("is_deactive")
    darkLight.classList.add("is_active");
    setInterval(() => {
      }, 100);
    darkLight.innerHTML = '<i class="fa-solid fa-sun" style="color: yellow;"></i>'
    active = false;
    ColorWhite();
  }
  else
  {
    darkLight.classList.remove("is_active")
    darkLight.classList.add("is_deactive");
    setInterval(() =>
    {
    }, 100)
    darkLight.innerHTML = '<i class="fa-solid fa-moon" style="color: whitesmoke;"></i>';
    active = true
    ColorDark();
  }

})

/// funcion para aplicar el cambio de color a los elementos por medio del toggle button

  function ColorWhite()
  {
    body = document.body;
    header = document.getElementById("header");
    navbar = document.getElementById("navbar");
    about = document.getElementById("info-text");
    experience = document.getElementById("EXPERIENCE");
    skill = document.getElementById("SKILL");
    portfolio = document.getElementById("PORTFOLIO");
    contact = document.getElementById("CONTACT");
    footer = document.getElementById("footer");
          /// añado clases a los elementos
    body.classList.add("light");
    header.classList.add("light");
    navbar.classList.add("light");
    about.classList.add("light");
    experience.classList.add("light");
    portfolio.classList.add("light");
    contact.classList.add("light");
    skill.classList.add("light");
    footer.classList.add("light");
  }
/// le saca las clases 
  function ColorDark()
  {
    body.classList.remove("light");
    header.classList.remove("light");
    navbar.classList.remove("light");
    footer.classList.remove("light");
    about.classList.remove("light");
    experience.classList.remove("light");
    skill.classList.remove("light");
    portfolio.classList.remove("light");
    contact.classList.remove("light");
    header.classList.remove("light");
  }



