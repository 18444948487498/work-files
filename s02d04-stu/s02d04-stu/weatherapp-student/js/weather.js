let weather = {
    apiKey: '0aa8679f7f4cfb9af5b36c2935c1a05d',
    fetchweather:function(city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='+
            city +
            '&units=metric&appid=' + 
            this.apiKey
        )
        .then((response)=> {
            if(!response){
                alert('no weather found')
                throw new Error('no weather found')
            }
            return response.json()
        })
        .then((data) => this.displayweather(data))
    },
    displayweather: function(data){
        const{name} =data;
        const{icon,description} =data.weather[0]
        const{temp,humidity}=data.main
        const{speed}=data.wind
        document.querySelector('.city').innerText = 'weather in '+name
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon +'.png'
        document.querySelector('.icon').alt = name
        document.querySelector('.description').innerText = description
        document.querySelector('.temp').innerText = Math.round(temp) + '°'
        document.querySelector('.humidity').innerText = 'humidity: ' + humidity + '%'
        document.querySelector('.wind').innerText = 'wind:' + Math.round(speed)+ ' m/s'
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1920x1080/?' + name + '" )'
        
    },
    search: function(){
        this.fetchweather(document.querySelector('.search-bar').value)
    }
}

document.querySelector('.search-bar').addEventListener('keyup', function(event){
    if(event.key == 'enter'){
        weather.search()
    }
})

document.querySelector('.search button').addEventListener('click',function(){
    weather.search()
})

weather.fetchweather('Klaipeda')