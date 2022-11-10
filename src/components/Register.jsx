const Register = () => {

    const Registration = async(event) => {
        event.preventDefault();
        const {name, lastName, email, password} = document.forms[0];
        console.log(name.value, lastName.value, email.value, password.value)
        await fetch('http://localhost:27017/api/users/', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: name.value,
                    lastname: lastName.value,
                    email: email.value,
                    password: password.value,
                }
            )
        });
    }

    return (
        <div>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type={'text'} name={'name'}/>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type={'text'} name={'lastName'}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type={'email'} name={'email'}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type={'password'} name={'password'}/>
                </div>
                <div>
                    <button type="Submit" onClick={Registration}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;