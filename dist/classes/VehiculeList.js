class VehiculeList {
    constructor() {
        this._vehiculeList = [];
    }
    get vehiculeList() { return this._vehiculeList; }
    addCar(vehiule) {
        this._vehiculeList.push(vehiule);
    }
    deleteCar() {
        if (this._vehiculeList.length > 0) {
            this._vehiculeList.pop();
        }
    }
    rendACar(vehicule) {
        this.vehiculeList.splice(this.vehiculeList.indexOf(vehicule), 1);
    }
}
export default VehiculeList;
//# sourceMappingURL=VehiculeList.js.map