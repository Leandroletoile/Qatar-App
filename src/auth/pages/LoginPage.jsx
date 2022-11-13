import { Link, Link as RouterLink } from "react-router-dom";

import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startGithubSignIn } from "../../store/auth/thunks";
import { useMemo } from "react";




export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  console.log(status);

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  const onGithubSignIn = () => {
    console.log('onGithubSignIn');
    dispatch(startGithubSignIn());
  }

  return (
    <>

        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <p>&nbsp;</p>
              <div className="card bgBlack">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <img src="/messi.gif" alt="" className="gifs" />
                  </div>
                  <p>&nbsp;</p>
                  <form onSubmit={onSubmit}>
                    <div className="form-group mb-4">
                      <label className="text-white">Email address</label>
                      <input name="email" value={email} onChange={onInputChange} className="form-control" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mb-4">
                      <label className="text-white">Password</label>
                      <input value={password} name="password" onChange={onInputChange} type="password" className="form-control" />
                    </div>
                    <div className="d-flex justify-content-evenly">
                      <button type="submit button" className="btn btn-outline-light">Sign in <i className="bi bi-check"></i></button>
                      <button className="btn btn-outline-light cursorGol" onClick={onGoogleSignIn}><i className="bi bi-google"></i> Google</button>
                      <button className="btn btn-outline-light cursorGol" onClick={onGithubSignIn}><i className="bi bi-github"></i> Github</button>
                      <Link  className="btn btn-outline-light cursorGol" component={RouterLink} color="inherit" to='/auth/register'>
                        Create <i className="bi bi-plus"></i>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>

  );
};
