const input = document.getElementById("colorInput");
const btn = document.getElementById("btn");


btn.addEventListener("click", () =>{
  document.body.style.background =`linear-gradient(135deg, ${input.value}, white)`;

}
);