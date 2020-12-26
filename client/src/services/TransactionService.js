import axios from 'axios'

class TransactionService {
    
    findAllBysendername(user) {
        return axios.get(`/accessHome/${user}`);
    }
}

export default new TransactionService();