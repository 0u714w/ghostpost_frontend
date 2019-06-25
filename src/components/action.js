import axios from "axios";
import { push } from "connected-react-router";

export const addBoast = ({message}) => (dispatch, getState) => {
    axios({
        method: "POST",
        url: "https://localhost:8000/apiBaRs/",
        headers: {"Content-Type": "application/json"},
        data: {text: message}
    })
    .then(() => {
        dispatch(push("/"));
    })
}