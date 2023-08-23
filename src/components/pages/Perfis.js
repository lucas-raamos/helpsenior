import { useNavigate } from "react-router-dom"
import Message from "../layout/Message"

function Perfis(){
    const navigate = useNavigate()
    let message = ''
    if (navigate.state) {
        message = navigate.state.message
    }

    return (
        <div>
            <h1>Perfis</h1>
            {message && <Message type="success" msg={message} />}
        </div>
    )
}


export default Perfis