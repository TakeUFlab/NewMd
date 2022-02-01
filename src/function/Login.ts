import axios from "axios";

export async function Login(id: string, psd: string) {
    try {
        const res = await axios.get(`https://md-apps.herokuapp.com/mdcloud/login/${id}/${psd}`);
        const data = res.data;
        return data;
    }catch(data) {
        return {error: 'network error'};
    }
}

/**
 * LOGIN RESTful API from https://md-apps.herokuapp.com/mdcloud/login/:id/:password
 */