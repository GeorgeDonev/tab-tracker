//used for connector to be able to hit the back end
import axios from 'axios'

//makes an axios object that points to teh back-end url localhost:8081
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}

