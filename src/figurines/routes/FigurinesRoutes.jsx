import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { AllTeamsPage } from '../pages/AllTeamsPage'
import { FavouriteTeamPage } from '../pages/FavouriteTeamPage'
import { FixturePage } from '../pages/FixturePage'



export const FigurinesRoutes = () => {


  return (
    <>


      <NavBar />


      <div className="container">


        <Routes>


          <Route path='/*' element={<AllTeamsPage />} />

          <Route path='dreamteam' element={<FavouriteTeamPage />} />

          <Route path='fixture' element={<FixturePage />} />


        </Routes>


      </div>
    </>
  )
}
