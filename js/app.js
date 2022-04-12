//function change lenguage
function write(){
    document.querySelector(".btn-lang").classList.toggle("show");
    document.querySelector(".box").classList.toggle("show");
    document.querySelector(".box-1").classList.toggle("show");
}
document.querySelector(".btn-lang").addEventListener("click", () => {
    write();
  });

//funtion hamburguer menu
function barsbtn(){
  document.querySelector(".open").classList.toggle("show");
  document.querySelector(".close").classList.toggle("show");
  }
document.querySelector(".open").addEventListener("click", () => {
  barsbtn()
});
document.querySelector(".close").addEventListener("click", () => {
  barsbtn()
});