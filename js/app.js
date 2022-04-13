//function change lenguage
function write(){
    document.querySelector(".btn-lang").classList.toggle("show");
    document.querySelector(".box").classList.toggle("show");
    document.querySelector(".box-1").classList.toggle("show");
}
document.querySelector(".btn-lang").addEventListener("click", () => {
    write();
  });

//####################################################################

//funtion news (news)
function news(){
  document.querySelector(".btn-news").classList.toggle("show");
  document.querySelector(".main-hero").classList.toggle("dn");
  document.querySelector(".main-seccion").classList.toggle("show");
  }

//activar funcion (news)
document.querySelector("#news").addEventListener("click", () => {
  news()
});
