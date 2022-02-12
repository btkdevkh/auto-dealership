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
        this._vehiculeList.splice(this._vehiculeList.indexOf(vehicule), 1);
    }
}
export default VehiculeList;
//# sourceMappingURL=VehiculeList.js.map