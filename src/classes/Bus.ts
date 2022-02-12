import Vehicule, { VehiculeType } from "./Vehicule.js";

class Bus extends Vehicule {
  constructor(imatriculation: string) {
    super(imatriculation, VehiculeType.BUS)
  }
}

export default Bus
