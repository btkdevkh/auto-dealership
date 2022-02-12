import Bus from "./classes/Bus.js";
import Car from "./classes/Car.js";
import AutoGTA from "./classes/AutoGTA.js";
const form = document.querySelector('form');
const vehiculeList = document.getElementById('vehicule_list');
const immatInput = document.getElementById('immatriculation');
const rentBtn = document.querySelector('.rent');
const addBtn = document.querySelector('.addPost');
const msg = document.querySelector('.msg');
// Datas
const gta = new AutoGTA();
gta.addCar(new Car('EE15RRS'));
gta.addCar(new Car('AA155XB'));
gta.addCar(new Bus('BB05LBB'));
gta.addCar(new Bus('CC155BB'));
gta.addCar(new Bus('VV155KK'));
// Logics
const loadVehicules = () => {
    let html = "";
    gta.getVehicules().forEach(v => {
        html += `<option value="${v.imatriculation}">${v.type} : ${v.imatriculation}</option>`;
    });
    return html;
};
const uiControls = (isTrue) => {
    if (!isTrue) {
        msg.classList.remove('d-none');
        msg.classList.add('alert-danger');
        msg.classList.remove('alert-success');
        msg.textContent = 'Immariculation is required';
    }
    else {
        msg.classList.remove('alert-danger');
        msg.classList.remove('d-none');
        msg.classList.add('alert-success');
        msg.textContent = 'Vehicule added';
    }
};
// Events
document.addEventListener('DOMContentLoaded', () => {
    vehiculeList.innerHTML = loadVehicules();
    rentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        gta.rendACar(form.vehicule_list.value);
        vehiculeList.innerHTML = loadVehicules();
    });
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(immatInput.value);
        if (!immatInput.value) {
            uiControls(false);
            return;
        }
        uiControls(true);
        gta.addCar(new Car(immatInput.value));
        vehiculeList.innerHTML = loadVehicules();
    });
});
//# sourceMappingURL=main.js.map