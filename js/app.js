function write(){
    document.querySelector(".btn-lang").classList.toggle("show");
    document.querySelector(".box").classList.toggle("show");
    document.querySelector(".box-1").classList.toggle("show");
}

//function dewrite(){
//    document.querySelector(".btn-lang-close").classList.toggle("show");
//    document.querySelector(".box").innerHTML='';
//}

document.querySelector(".btn-lang").addEventListener("click", () => {
    write();
  });

//document.querySelector(".btn-lang-close").addEventListener("click", () => {
//    dewrite();
//  });