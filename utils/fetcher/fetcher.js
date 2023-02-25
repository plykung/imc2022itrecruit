import axios from "axios";

export default function fetcher([url, payload]) {
    axios.get(url, { params: payload }).then(res => {
        return res.data
    })
}