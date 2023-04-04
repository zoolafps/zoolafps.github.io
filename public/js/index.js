const searchBtn = document.getElementById("search-btn");
  const userBtn = document.getElementById("user-btn");

  searchBtn.addEventListener("click", () => {
    document.querySelector(".search-form").classList.toggle("show");
  });

  userBtn.addEventListener("click", () => {
    document.querySelector(".user-list").classList.toggle("show");
  });
document.addEventListener('load', () => {
  /* showAlerts; */
});

/* function showAlerts() {
  Swal.fire({
    position: 'bottom',
    title: 'Importante',
    icon: 'info',
    html:
      'Esta <strong>no</strong> es la pagina web <strong>oficial del colegio itey</strong>, ' +
      'si deseas acceder a ella puedes usar el siguiente enlace.' +
      '<a href="https://colitey.edu.co/site"> "enlace"</a> ',
    confirmButtonColor: '#219ebc',
    confirmButtonText: 'entiendo'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: 'bottom',
        title: 'Importante',
        html: 'el proyecto itey plus es un proyecto personal dirigido por el alumno <strong>Andres F. Patiño</strong>, ni las directivas, ni la institucion hacen parte de dicho proyecto',
        confirmButtonColor: '#219ebc',
      });
    }
  });
}
let time = 900000;
setInterval(showAlerts, time); */