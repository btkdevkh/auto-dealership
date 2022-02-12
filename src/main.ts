import Bus from "./classes/Bus.js"
import Car from "./classes/Car.js"
import AutoGTA from "./classes/AutoGTA.js"

const form = document.querySelector('form')! as HTMLFormElement
const vehiculeList = document.getElementById('vehicule_list')! as HTMLSelectElement

const immatInput = document.getElementById('immatriculation')! as HTMLInputElement
const rentBtn = document.querySelector('.rent')! as HTMLButtonElement
const addBtn = document.querySelector('.addPost')! as HTMLButtonElement
const msg = document.querySelector('.msg')! as HTMLDivElement

// Datas
const gta = new AutoGTA()
gta.addCar(new Car('EE15RRS'))
gta.addCar(new Car('AA155XB'))
gta.addCar(new Bus('BB05LBB'))
gta.addCar(new Bus('CC155BB'))
gta.addCar(new Bus('VV155KK'))

// Logics
const loadVehicules = (): string => {
  let html: string = ""
  gta.getVehicules().forEach(v => {
    html += `<option value="${v.imatriculation}">${v.type} : ${v.imatriculation}</option>`
  })

  return html
}

const uiControls = (isTrue: boolean) => {
  if(!isTrue) {
    msg.classList.remove('d-none')
    msg.classList.add('alert-danger')
    msg.classList.remove('alert-success')
    msg.textContent = 'Immariculation is required'
  } else {
    msg.classList.remove('alert-danger')
    msg.classList.remove('d-none')
    msg.classList.add('alert-success')
    msg.textContent = 'Vehicule added'
  }
}

// Events
document.addEventListener('DOMContentLoaded', () => {
  vehiculeList.innerHTML = loadVehicules()

  rentBtn.addEventListener('click', (e) => {
    e.preventDefault()

    gta.rendACar(form.vehicule_list.value)
    vehiculeList.innerHTML = loadVehicules()
  })

  addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    console.log(immatInput.value);
    if(!immatInput.value) {
      uiControls(false)
      return
    }

    uiControls(true)    
    gta.addCar(new Car(immatInput.value))
    vehiculeList.innerHTML = loadVehicules()
  })
})
