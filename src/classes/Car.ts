import Vehicule, { VehiculeType } from "./Vehicule.js";

class Car extends Vehicule {
  constructor(imatriculation: string) {
    super(imatriculation, VehiculeType.CAR)
  }
}

export default Car
