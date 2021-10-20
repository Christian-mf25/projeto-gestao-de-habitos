import { useHistory } from "react-router-dom";

const HomePage = () =>{

	const history = useHistory();
	const token = JSON.parse(localStorage.getItem("@Productive:token"));
	
	const sendTo = (path) =>{
		history.push(path)
	}

	token && (
		sendTo("/dashboard")
	)

	return(
		<>
		<button onClick={() => sendTo("/login")}>
			Login
		</button>

		<button onClick={() => sendTo("/register")}>
			Register
		</button>

		</>
	)
}

export default HomePage