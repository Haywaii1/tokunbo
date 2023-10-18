import axios from "axios";
import { useState } from "react";
// const url ='http://course-api.com/react-store-products';
const url = 'https://course-api.com/axios-tutorial-post';

export function Data () {

    const [surname, setSurName] = useState("")
    const [firstname, setFirstName] = useState("")

    // const fetchData = async () =>{
    //     try{
    //         const data = response.data

    //         let response = await axios(url)
    //         console.log(data)
    //     }
    //     catch(error) {
    //         console.log(error.reponse)
    //     }
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const response = await axios.post(url, {name: surname, email: firstname});
            console.log(response.data);
        } catch(error) {
            console.log(error.response)
        }}

    return (
        <div>
        <h1>Hello world</h1>
        <form onSubmit={handleSubmit}>
                <label className="sur">Surname
                <input
                type="Surname"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurName(e.target.value)}
                />
                </label>
                <br />

                <label className="sur">First Name
                <input
                type="text"
                value={firstname}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                />
                </label>
                <button>submit</button>
            </form>
            </div>
        );
}