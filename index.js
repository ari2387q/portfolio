

fetchData();

async function fetchData(){
    try{
        const val=document.getElementById("in").value ;
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`);
        if(!response.ok){
            throw new Error("aw hell no!!");
        }
        const data= await response.json();
        const poke=data.sprites.front_default;
        const img=document.getElementById("poke");
        img.src=poke;
        img.style.display="block";

    }
    catch(error){
        console.error(error);
    }

}