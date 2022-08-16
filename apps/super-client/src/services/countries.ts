import axios from "axios";

export default async function getProductsApi() {
    const { data } = await axios.get(`http://localhost:2200/countries-delay`)
    // model response
    return data.data;
}