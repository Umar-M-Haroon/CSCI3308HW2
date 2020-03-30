$(document).ready(function () {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key

    // console.log(state_info) // Notice the templating here, use that when you form your url
    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var url = `https://api.weatherstack.com/forecast?access_key=${apiKey}&query=`;
    for (var key in state_info) {
        var state_obj = state_info[key]
        var formattedString = `${state_obj.lat},${state_obj.lng};`
        url += formattedString
    }

    $.ajax({ url: url, dataType: "jsonp" }).then(function (data) {
        var indices = Object.keys(state_info)
        for (var key in state_info) {
            var index = indices.indexOf(key)
            var temperature = 1
            // TODO
            // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
            var temperature = toFarenheit(data[index].current.temperature)
            switch (true) {
                case (temperature <= 10):
                    $(`#${key}`).css('fill', "#6495ED");
                    break
                case (temperature > 10 && temperature <= 20):
                    $(`#${key}`).css('fill', "#7FFFD4");
                    break
                case (temperature > 20 && temperature <= 30):
                    $(`#${key}`).css('fill', "#0000FF");
                    break
                case (temperature > 30 && temperature <= 40):
                    $(`#${key}`).css('fill', "#008B8B");
                    break
                case (temperature > 40 && temperature <= 50):
                    $(`#${key}`).css('fill', "#00BFFF");
                    break
                case (temperature > 50 && temperature <= 60):
                    $(`#${key}`).css('fill', "#F08080");
                    break
                case (temperature > 60 && temperature <= 70):
                    $(`#${key}`).css('fill', "#CD5C5C");
                    break
                case (temperature > 70 && temperature <= 80):
                    $(`#${key}`).css('fill', "#8B0000");
                    break
                case (temperature > 80 && temperature <= 90):
                    $(`#${key}`).css('fill', "#B22222");
                    break
                case (temperature > 90):
                    $(`#${key}`).css('fill', "#FF0000");
                    break
                default:
                    console.error(`We reached at the default ${temperature}`)
                    $(`#${key}`).css('fill', "#808080");
                    break
            }

            var element = document.getElementById(`${key}`)
            element.setAttribute("data-toggle", "tooltip")
            element.setAttribute("data-html", "true")
            element.setAttribute("title", `
            <div>
            <div>
            Wind Speed ${data[index].current.wind_speed}MPH ${data[index].current.wind_dir}
            <div>

<img class="${data[index].current.wind_dir}" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/White_Arrow_Up.svg/480px-White_Arrow_Up.svg.png" width=30 height=30 style="transform:(90deg);"></div>
                 </div>
            Temperature: ${temperature}
            </div>`)
        }
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    });
});

function toFarenheit(number) {
    return number * (9 / 5) + 32
}