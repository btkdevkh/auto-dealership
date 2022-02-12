import Bus from "./Bus.js";
import Car from "./Car.js";
import Vehicule, { VehiculeType } from "./Vehicule.js";
import VehiculeList from "./VehiculeList.js";

class AutoGTA {
  private _cars: VehiculeList<Car> = new VehiculeList<Car>()
  private _buses: VehiculeList<Bus> = new VehiculeList<Bus>()

  get car() { return this._cars }
  get bus() { return this._buses }

  public getVehicules(): Vehicule[] {
    return [...this._cars.vehiculeList, ...this._buses.vehiculeList]
  }

  public addCar<T extends Vehicule>(vehicule: T) {
    if(vehicule.type === VehiculeType.CAR) {
      this._cars.addCar(vehicule)
    } else if(vehicule.type === VehiculeType.BUS) {
      this._buses.addCar(vehicule)
    }
  }

  private getVehiculeByImmatriculation(imatriculation: string): Vehicule | null {
    return this.getVehicules().find(v => v.imatriculation === imatriculation) ?? null
  }

  public rendACar(imatriculation: string) {
    let vehicule =  this.getVehiculeByImmatriculation(imatriculation)
    if(vehicule) {
      if(vehicule.type === VehiculeType.BUS) this._buses.rendACar(vehicule)
      else if(vehicule.type === VehiculeType.CAR) this._cars.rendACar(vehicule)
    }
  }

  public displayAuto() {
    this._cars.vehiculeList.forEach((car: Car) => { 
      console.log("Type:", car.type);
      console.log("Imatriculation:", car.imatriculation);
    });

    this._buses.vehiculeList.forEach((bus: Car) => { 
      console.log("Type:", bus.type);
      console.log("Imatriculation:", bus.imatriculation);
    });
  }
}

export default AutoGTA
