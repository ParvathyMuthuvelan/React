import axios from "axios";

const URL='http://localhost:8400/auth';
	class LoginService
	{
        test()
        {
            console.log('test function');
        }
		loginValidate(authRequest)
		{
            console.log("login fn called");
			return axios.post(URL+"/authenticate",authRequest);
		}

        getMovies()
        {
           var token="Bearer "+localStorage.getItem("jwt");
           console.log(token);
           return axios.get("http://localhost:8300/catalog/getAllMovies",{ headers: {"Authorization" : `${token}`} });
            //return axios.get(URL+"/authorize",{ headers: {"Authorization" : `${token}`} });
        }
	}
	export default new LoginService();