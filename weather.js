
function clearAll()
{
    input_name.value=""
}

 const search = async()=>{
    let placeName=input_name.value

    if(placeName){
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=db32aa37d65e16331673a392e044f98f`)
       
       
        if(response.status==404){
            alert('Invalid City Name')
             input_name.value=' '}

else{

response.json().then((data)=>{console.log(data);

            let name=data.name
        console.log(name);
        
         let country=data.sys.country
         console.log(country);

        let humidity=data.main.humidity
        console.log(humidity);

        let pressure=data.main.pressure
        console.log(pressure);

        let temperature=data.main.temp
        min_temp=Math.round(temperature-273.15)
        temperature=`${min_temp}`
        console.log(temperature);
    

        let sym=data.weather[0].icon
        console.log(sym);

        let speed=data.wind.speed
        console.log(speed);
        const icon=`https://openweathermap.org/img/wn/${sym}@2x.png`
        

        for(var w in data.weather ){
            var des=data.weather[w].description}
            console.log(des);
       
  
        

        result.innerHTML=`
        <div class="card" style="width: 25rem;">
         
<div class="card-body">
<p class="card-text">City Name: ${name}</p>

<p class="card-text">Country Name: ${country}</p>
<img src="${icon}" class="img " alt="...">
<p class="card-text">  weather: ${des}</p>


<div class="row">
<div class="col-6">
 <div class="row">
<img src="./images/imgbin-moisture-computer-icons-humidity-others-mRFb5YUq8jSh2VqiVK2dEvXTG-removebg-preview.png"  class="image"  width="90px" alt="">  
<p class="card-text">Humidity: ${humidity}%</p>

</div> 
</div>
<div class="col-6">
 <div class="row">    
<img src="./images/wind-icon-logo-isolated-sign-260nw-1922596868-removebg-preview.png"   width="90px" class="image" alt="">
<p class="card-text">Wind Speed: ${speed}km/h</p>

</div>
</div> 
</div>

<div class="row">
<div class="col-6">
<div class="row">
<img src="./images/pressure.png" class="image" >
<p class="card-text">Pressur: ${pressure}</p>

</div> 
</div>
<div class="col-6">
<div class="row">
<img src="https://cdn.iconscout.com/icon/free/png-256/free-temperature-weather-forecast-measure-sun-heat-shine-15467.png"  class="image">
<p class="card-text" >Temperature: ${temperature} °C</p>

</div>
</div> 
</div>

</div>
</div>



`})



    }
}
   
}
