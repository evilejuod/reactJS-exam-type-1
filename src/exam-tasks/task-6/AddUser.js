
const AddUser = ()=> {

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const resp = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await resp.json()
        return data;
    }

    return(
        <div>
            <h4>Add user</h4>
            <form onSubmit={handleSubmit}>
                <button>Add user data</button>
            </form>
        </div>
    )
}
export default AddUser;