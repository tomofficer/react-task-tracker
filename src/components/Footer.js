import { Link } from "react-router-dom"

//footer page with link to About page, shows example of using React Router
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
