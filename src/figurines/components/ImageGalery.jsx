import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VanillaTilt from 'vanilla-tilt';
import { usePagination } from "../../hooks/usePagination";
import { setTeamByName } from '../../store/figurines/figurinesSlice'
import { ButtonsPagination } from "./ButtonsPagination";
import { Modal } from "./Modal";



export const ImageGalery = () => {


  const dispatch = useDispatch()


  const [mustDisplayModal, setMustDisplayModal] = useState(false)


  const [modalContent, setModalContent] = useState({})


  const { teams , nameByTeam } = useSelector(state => state.figurines)


  const { actualPage, handleChangeNextPage, handleChangePrevPage } = usePagination()



  const handleClick = ({ target }) => {
    setModalContent({ event: target.currentSrc })
    setMustDisplayModal(true)
  }



  useEffect(() => {

    dispatch(setTeamByName(actualPage))
    setMustDisplayModal(true)

  }, [actualPage, mustDisplayModal])

  console.log(actualPage);



  const onNextPage = () => {
    handleChangeNextPage()
  }

  const onPrevPage = () => {
    handleChangePrevPage()
  }

  VanillaTilt.init(document.querySelectorAll("img"), {

    max: 35,
    speed: 400,
  });


  return (
    <>

      <div className="d-flex text-center justify-content-center align-items-center">
        <ButtonsPagination onNextPage={onNextPage} onPrevPage={onPrevPage} />
      </div>


      <div style={{ backgroundImage: `url("/${nameByTeam}.png")` }} className="container mt-5 bgTexture opacity">
        <div className="row d-flex justify-content-center align-items-center mb-2">
          <div className="col padding d-flex justify-content-center align-items-center">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark" src={teams[0]} />
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark padding" src={teams[1]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark padding" src={teams[2]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark padding" src={teams[3]} />
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark" src={teams[4]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[5]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[6]} />
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark" src={teams[7]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[8]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[9]} />
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark" src={teams[10]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[11]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[12]} />
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark" src={teams[13]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[14]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[15]} />
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img type='button' onClick={(e) => handleClick(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-4 border-dark" src={teams[16]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[17]} />
          </div>
          <div className="col padding d-flex justify-content-center align-items-center mb-2">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' onClick={(e) => handleClick(e)} className="border border-4 border-dark" src={teams[18]} />
          </div>
        </div>
      </div>




      {mustDisplayModal && (
        <Modal modalContent={modalContent} />
      )}

    </>

  );
}

