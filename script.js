const arr1 = ['Shanghai', 'Lucknow', 'Boston', 'Kolkata', 'Mumbai', 'Delhi'];

for(let i=0; i<arr1.length; i++){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + arr1[i];
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2cd187e4famshf33175d4d1186b5p1e0980jsna591d05cf3e7',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    async function fun(){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

			const cloud_pct = result.cloud_pct;
			const feels_like = result.feels_like;
			const humidity = result.humidity;
			const max_temp = result.max_temp;
			const min_temp = result.min_temp;
			const sunrise = result.sunrise;
			const sunset = result.sunset;
			const temp = result.temp;
			const wind_degrees = result.wind_degrees;
			const wind_speed = result.wind_speed;

			const values = [cloud_pct, feels_like, humidity, max_temp, min_temp, sunrise, sunset, temp, wind_degrees, wind_speed]

			const myElement = document.getElementById(arr1[i]);
			const child_array = myElement.children;

			for(let i=1; i<child_array.length; i++){
				child_array[i].innerHTML = values[i-1];
			}
		
        } catch (error) {
            console.error(error);
        }
    };

    fun();
}