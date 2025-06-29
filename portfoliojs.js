const edu = document.getElementById("edu");
const edudiv = document.getElementById("edudiv");

edu.addEventListener("click", () => {
  edudiv.classList.toggle("hidden");
    expdiv.classList.add("hidden");
    skidiv.classList.add("hidden");
});
    

const exp = document.getElementById("exp");
const expdiv = document.getElementById("expdiv");

exp.addEventListener("click", () => {
  expdiv.classList.toggle("hidden");
    edudiv.classList.add("hidden");
    skidiv.classList.add("hidden");
});

const ski = document.getElementById("ski");
const skidiv = document.getElementById("skidiv");

ski.addEventListener("click", () => {
  skidiv.classList.toggle("hidden");
    expdiv.classList.add("hidden");
    edudiv.classList.add("hidden");
});