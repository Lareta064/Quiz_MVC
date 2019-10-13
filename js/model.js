;
(function () {
    'use strict'

    const dataBase = {
        currentPlateNumber: 1,
        plate1: {},
        plate2: {
            item: null
        },
        plate3: {
            items: []
        },
        plate4: {
            item: null
        },
        plate5: {
            email: null,
            agreement: false
        },
        plate6: {}
    }

    const api = {
        dispatch() {
            api.update()
        },
        getCurrentPlateNumber() {
            return dataBase.currentPlateNumber
        },
        toNextPlate() {
            if (dataBase.currentPlateNumber < 6) {
                dataBase.currentPlateNumber++
                api.dispatch()
            }
            return dataBase.currentPlateNumber
        },
        toPrevPlate() {
            if (dataBase.currentPlateNumber > 1) {
                dataBase.currentPlateNumber--
                api.dispatch()
            }
            return dataBase.currentPlateNumber
        },
        getPlateData(n) {
            return JSON.parse(JSON.stringify(dataBase['plate' + n]))
        },
        setPlateData(n, data) {
            dataBase['plate' + n] = JSON.parse(JSON.stringify(data))
            api.dispatch()
        }
    }
    window.model = api
})();