import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deletePlayer } from '../../store/figurines/figurinesSlice'



export const ModalDelete = ({ modalContent, mustDisplayModal, setMustDisplayModal }) => {



    const dispatch = useDispatch()


    const { nameByTeam } = useSelector(state => state.figurines)


    const onDeletePlayer = () => {
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
            title: 'Sticker Deleted'
        })
        dispatch(deletePlayer(modalContent.event))
    }

    const handleDelete = () => {

        onDeletePlayer()
        setMustDisplayModal(false)
    }

    return (
        <>
            <div style={mustDisplayModal == true ? { display: 'block' } : null} className={`modal fade${mustDisplayModal == true ? 'show' : ''}`} id="exampleModal1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title text-light" id="exampleModalLabel1">{nameByTeam.toUpperCase()}</h5>
                            <button onClick={() => setMustDisplayModal(false)} type="button" className="btn btn-lg btn-outline-secondary text-light" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-circle"></i></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <img className="border border-4 border-light" src={modalContent.event} alt="" />
                        </div>
                        <div className="modal-footer d-flex align-items-center justify-content-center">
                            <button type="button" onClick={handleDelete} className="btn btn-outline-secondary btn-lg text-light">Delete &nbsp;<i className="bi bi-trash3"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}