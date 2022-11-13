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

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="card mb-3 d-flex maxWidth">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/things-fall-apart.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>



    </>
  )
}



