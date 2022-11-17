import { useNavigate } from "react-router-dom";

export const FixturePage = () => {

  const navigate = useNavigate()

  const onNavigateBack = () => {

    navigate(-1)
  }

  return (

    <>

      <div className='container align-items-center justify-content-center'>
        <div className="row mt-5 d-flex align-items-center justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">

            <button className='btn btn-dark btn-lg'
              onClick={onNavigateBack}
            >
              Back
            </button>

          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img className='imgFixture d-flex mt-5 mb-5 animate__animated animate__bounceInUp' src="/fixture_1.webp" alt="" />
          </div>
        </div>

      </div>



    </>
  )
}



