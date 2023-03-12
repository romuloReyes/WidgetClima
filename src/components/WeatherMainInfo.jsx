
const WeatherMainInfo = ({weather}) => {
  return (
    <div className="text-2xl">
        <div className="font-bold uppercase text-center">{weather?.location.name}</div>

        <div className="text-center">{weather?.location.country}</div>

        <div className="flex justify-center items-center mb-5 m-auto">
            <div className="w-2/4">
                <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    alt={weather?.current.condition.text} 
                    className="w-3/4 ml-10"
                />
            </div>

            <div className="w-1/4">
                <div>{weather?.current.condition.text}</div>
                <div>{weather?.current.temp_c}°</div>
            </div>
        </div>

        <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110331.71622148815!2d${weather?.location.lon}!3d${weather?.location.lat}3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1678563297561!5m2!1ses!2smx`} title="Mapa" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-lg w-[30rem] h-80"></iframe>
    
    </div>
    
  )
}

export default WeatherMainInfo
