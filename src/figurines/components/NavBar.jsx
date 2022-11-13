import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../store/auth/thunks";


export const NavBar = () => {


    const dispatch = useDispatch()

    const onLogout = () => {

        dispatch(startLogout())

    }


    return (

        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-light"><i className="bi bi-trophy-fill"></i>&nbsp; Qatar 2022  &nbsp;<i className="bi bi-trophy-fill"></i></a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">

                            <li className="nav-item marginRight mb-2">
                                <NavLink to={'/fixture'} ><button className='btn btn-outline-secondary text-light'>Fixture <i className="bi bi-balloon-heart"></i></button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/dreamteam'} ><button className='btn btn-outline-secondary text-light'>My Team &nbsp;<i className="bi bi-arrow-through-heart"></i></button></NavLink>
                            </li>

                        </ul>
                        <form>
                            <button className="btn btn-outline-secondary text-light" onClick={onLogout}>Exit &nbsp;<i className="bi bi-heartbreak"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
