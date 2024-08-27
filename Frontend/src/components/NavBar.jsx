import { useContext } from "react";
import {Container, Nav, Navbar, Stack} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    return ( <Navbar bg="dark" className="mb-4" style={{height: "3.75ren"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none">ChatApp</Link>
            </h2>
            { user && <span className="text-warning">Logged in as {user?.name}</span>}
            <nav>
                <Stack direction="horizontal" gap={3}>
                    {
                        user && (<>
                        <Link onClick = {()=>logoutUser()} to="/Login" className="link-light text-decoration-none">Logout</Link>
                        </>)
                    }
                    {
                        !user &&(<>
                        <Link to="/Login" className="link-light text-decoration-none">Login</Link>

<Link to="/Register" className="link-light text-decoration-none">Register</Link>
                        </>)
                    }
                    
                </Stack>
            </nav>
        </Container>
    </Navbar> );
}
 
export default NavBar;