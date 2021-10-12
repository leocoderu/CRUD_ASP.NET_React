import axios from "axios";
import { dCandidate } from "../reducers/dCandidate";

const baseUrl = "http://localhost:56271/api/";

export default {
    dCandidate(url = baseUrl + 'dcandidate/') {
        return {
            fetchAll: () => axios.get(url),
            frtchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}