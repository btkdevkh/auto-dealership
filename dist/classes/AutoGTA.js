import { VehiculeType } from "./Vehicule.js";
import VehiculeList from "./VehiculeList.js";
class AutoGTA {
    constructor() {
        this._cars = new VehiculeList();
        this._buses = new VehiculeList();
    }
    get car() { return this._cars; }
    get bus() { return this._buses; }
    getVehicules() {
        return [...this._cars.vehiculeList, ...this._buses.vehiculeList];
    }
    addCar(vehicule) {
        if (vehicule.type === VehiculeType.CAR) {
            this._cars.addCar(vehicule);
        }
        else if (vehicule.type === VehiculeType.BUS) {
            this._buses.addCar(vehicule);
        }
    }
    getVehiculeByImmatriculation(imatriculation) {
        var _a;
        return (_a = this.getVehicules().find(v => v.imatriculation === imatriculation)) !== null && _a !== void 0 ? _a : null;
    }
    rendACar(imatriculation) {
        let vehicule = this.getVehiculeByImmatriculation(imatriculation);
        if (vehicule) {
            if (vehicule.type === VehiculeType.BUS)
                this._buses.rendACar(vehicule);
            else if (vehicule.type === VehiculeType.CAR)
                this._cars.rendACar(vehicule);
        }
    }
    displayAuto() {
        this._cars.vehiculeList.forEach((car) => {
            console.log("Type:", car.type);
            console.log("Imatriculation:", car.imatriculation);
        });
        this._buses.vehiculeList.forEach((bus) => {
            console.log("Type:", bus.type);
            console.log("Imatriculation:", bus.imatriculation);
        });
    }
}
export default AutoGTA;
//# sourceMappingURL=AutoGTA.js.map