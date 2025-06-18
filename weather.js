const weatherform=document.querySelector(".weatherform");
const input=document.querySelector(".input");
const card=document.querySelector(".card");
const apikey="1e94261ba0bf982e3295d89d47621fe7";


weatherform.addEventListener("submit", async event=>{
    event.preventDefault();
    const city=input.value;
    if(city){
        try{
                const weatherdata= await getweatherdata(city);
                displayweatherinfo(weatherdata);

        }
        catch(error){
        console.error(error);
        displayerror(error);
    }

    }
    else{
        displayerror("please enter the city");
    }
});
async function getweatherdata(city){
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response=await fetch(apiurl);
    console.log(response);

    if(!response.ok){
        throw new Error("could not be found");

    }
    else{
        return await response.json();
    }
}

function displayweatherinfo(data){
        const {name:city,main:{temp,humidity},weather}=data;
        const description=weather[0].description;
        card.textContent=" ";
        card.classList.remove("hidden");
        card.classList.add("flex");
        const cityd=document.createElement("p");
        const tempd=document.createElement("p");
        const humd=document.createElement("p");
        const descd=document.createElement("p");
    
        cityd.textContent=city;
        tempd.textContent=`${temp} celsius`;
        humd.textContent=` humidity: ${humidity}`;
        descd.textContent=`description: ${description}`;
        
        card.appendChild(cityd);
        card.appendChild(tempd);
        card.appendChild(humd);
        card.appendChild(descd);


}

function displayerror(message){
    const errordisplay=document.createElement("p");
    errordisplay.textContent=message;
    errordisplay.classList.add("bg-blue-500");
    card.textContent="";
    card.classList.remove("hidden");
    card.classList.add("flex");
    card.appendChild(errordisplay);

}