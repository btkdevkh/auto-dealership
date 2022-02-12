class VehiculeList<T> {
  private _vehiculeList: Array<T> = []

  get vehiculeList() { return this._vehiculeList }

  public addCar(vehiule: T) {
    this._vehiculeList.push(vehiule)
  }

  public deleteCar() {
    if(this._vehiculeList.length > 0) {
      this._vehiculeList.pop()
    }
  }

  public rendACar(vehicule: T) {    
    this.vehiculeList.splice(this.vehiculeList.indexOf(vehicule), 1)
  }
}

export default VehiculeList
