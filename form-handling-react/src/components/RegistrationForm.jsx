const RegistrationForm = () => {

    return(
    <>
    <h2>Registration Form</h2>
    <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
    </form>
    </>
)
}
export default RegistrationForm;