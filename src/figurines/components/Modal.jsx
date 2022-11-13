import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { addPlayer } from '../../store/figurines/figurinesSlice'


export const Modal = ({ modalContent }) => {

    const dispatch = useDispatch()


    const { nameByTeam, myTeam, stateFull } = useSelector(state => state.figurines)


    const onAddPlayer = () => {

        if (myTeam.includes(modalContent.event)) {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Sticker is Already Added'
            })

            return

        }
        if (myTeam.length === 11) {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Your Team is full'
            })

            return
        }

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Sticker Added'
        })
        // ejecutar funcion para cargar el local storage
        dispatch(addPlayer(modalContent.event))
    }


    return (
        <>
            <div className="modal fade" id="exampleModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title text-light" id="exampleModalLabel">{nameByTeam.toUpperCase()}</h5>
                            <button type="button" className="btn btn-lg btn-outline-secondary text-light" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-circle"></i></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <img className="border border-4 border-light" src={modalContent.event} alt="" />
                        </div>
                        <div className="modal-footer d-flex align-items-center justify-content-center">
                            <button type="button" onClick={onAddPlayer} className="btn btn-outline-secondary btn-lg text-light">Add &nbsp;<i className="bi bi-heart"></i></button>
                            <button className="btn btn-lg btn-outline-secondary text-light" data-bs-dismiss="modal"><NavLink className={'text-decoration-none text-light'} to={'/dreamteam'}>My Team &nbsp;<i className="bi bi-arrow-through-heart"></i></NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}