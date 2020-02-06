const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2018, '+7 789 123 17 54', 'images/focus.jpg'),
    car('Toyota', 'Camry', 'Kim', 2019, '+7 789 123 17 45', 'images/camry.jpg'),
    car('Toyota', 'Prado', 'Omirbek', 2019, '+7 789 123 47 12', 'images/prado.jpg'),
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
                )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancel order: ${this.car.name} - ${this.car.model}`, 'cnl')
                )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show Phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }

})

