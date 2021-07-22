import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

const authReducer = (state, action) => {
	switch (action.type) {
		case "singin":
			return state;
			break;
		default:
			return state;
	}
};

//Funciones
const singup = (dispatch) => (fullname, emal, password) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response) => {
			console.log("User created");
		});
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{
		singup,
	},
	{
		user: {},
	}
);
