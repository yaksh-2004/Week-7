import axios from "axios";
import endPoints from "./neows";
const Api=axios.create({
    baseURL:endPoints.ServerBaseUrl,
})
export default Api;