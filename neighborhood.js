
function restaurantRec () {
    const restaurants = ['The Ridge Cafe', 'La Hacienda', 'Penny Ann\'s cafe', 'Serving Time Cafe', 'Astro Burgers', 'Spitz']

    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)]

    alert(`You should try ${randomRestaurant}!`)
}

let recommendation = document.querySelector('#restaurant-rec')

recommendation.addEventListener('click', restaurantRec)
