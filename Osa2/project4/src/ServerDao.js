
import Axios from 'axios'

let instance = null

export default class ServerDao {

    constructor() {
        if(instance === null) {
            this.baseURL = "http://localhost:3001/"
            instance = this
        }
        return instance
    }


    getPersons = async () => {
        let response = await Axios.get(this.baseURL + "persons")
        return response.data
    }

    postPerson = async (person) => {
        console.log("axious", person)
        let response = await Axios.post(this.baseURL + "persons", person)
        console.log(response)
        return response.data
    }

    updatePerson = async (id,person) => {
        let response = await Axios.put(this.baseURL + "persons/" + id, person)
        return response.data
    }

}