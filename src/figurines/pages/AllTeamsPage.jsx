import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageGalery } from '../components/ImageGalery'
import { startLoadingFigurines } from '../../store/figurines/thunks'
import { CheckingData } from '../components/CheckingData'



export const AllTeamsPage = () => {


  const dispatch = useDispatch()


  const { nameByTeam, isSaving } = useSelector(state => state.figurines)



  useEffect(() => {

    dispatch(startLoadingFigurines())

  }, [nameByTeam])




  if (isSaving === true) return <CheckingData />


  return (

    <>
      <div className="d-flex text-center justify-content-center align-items-center">
        <h1 className={'fontLetter'}>

          {
            nameByTeam ? nameByTeam.toUpperCase() : "ARGENTINA"
          }

        </h1>
      </div>

      <div className="d-flex justify-content-center align-items-center">

        <img className="animationStart animate__animated animate__lightSpeedOutRight" src="/mascota.png" alt="" />

        <img className="animationStart animate__animated animate__lightSpeedOutLeft" src="/mascota.png" alt="" />

      </div>


      <ImageGalery />

    </>
  )
}
