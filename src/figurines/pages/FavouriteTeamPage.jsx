import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ModalDelete } from '../components/ModalDelete'

export const FavouriteTeamPage = () => {


    const [mustDisplayModal, setMustDisplayModal] = useState(false)


    const [modalContent, setModalContent] = useState({})


    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    const { myTeam } = useSelector(state => state.figurines)


    const handleClick = ({ target }) => {
        setModalContent({ event: target.currentSrc })
        setMustDisplayModal(true)
    }


    return (

        <>
            <div className="container align-items-center justify-content-center">
                <div className="row">
                    <div className="col text-center d-flex text-center justify-content-center align-items-center">
                        <h1 className='fontLetter'>DREAM TEAM</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center flex-wrap">
                        {
                            myTeam.map(player =>
                                <img type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark m-1 animate__animated animate__rubberBand" key={player} src={player} alt="" />
                            )
                        }
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
                    <div className="col d-flex justify-content-center align-items-center">
                        <button className='btn btn-lg btn-dark btn-md'
                            onClick={onNavigateBack}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>


            {
            mustDisplayModal && <ModalDelete mustDisplayModal={mustDisplayModal} setMustDisplayModal={setMustDisplayModal} modalContent={modalContent} />
            }

        </>
    )
}
