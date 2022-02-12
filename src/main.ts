import Bus from "./classes/Bus.js"
import Car from "./classes/Car.js"
import AutoGTA from "./classes/AutoGTA.js"

const form = document.querySelector('form')! as HTMLFormElement
const vehiculeList = document.getElementById('vehicule_list')! as HTMLSelectElement

// Datas
const car1 = new Car('EE15RRS')
const car2 = new Car('AA155XB')
const bus1 = new Bus('BB05LBB')
const bus2 = new Bus('CC155BB')
const gta = new AutoGTA()
gta.addCar(car1)
gta.addCar(car2)
gta.addCar(bus1)
gta.addCar(bus2)

// Logics
const loadVehicules = () => {
  vehiculeList.innerHTML = ""
  gta.getVehicules().forEach(v => {
    vehiculeList.innerHTML += `
      <option value="${v.imatriculation}">${v.type} : ${v.imatriculation}</option>
    `
  })
}

// Events
loadVehicules()

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const selectedValue = form.vehicule_list.value
  gta.rendACar(selectedValue)
  loadVehicules()
})
