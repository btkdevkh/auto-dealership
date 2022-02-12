export enum VehiculeType {
  BUS = 'Bus',
  CAR = 'Car'
}

abstract class Vehicule {
  constructor(
    protected _imatriculation: string,
    protected _type: string
  ) {}

  get imatriculation() { return this._imatriculation }
  get type() { return this._type }
}

export default Vehicule
