import { FirebaseStorage } from '../../firebase/config'
import { getDownloadURL, ref } from "firebase/storage"
import { setAllTeams } from './figurinesSlice'
import { allTeamsData } from "../../figurines/helpers/allTeamsData"


export const startLoadingFigurines = () => {

    return async (dispatch, getState) => {

        const { dataTeams } = allTeamsData()

        const { nameByTeam } = getState().figurines

        const urlTeam = dataTeams.get(nameByTeam).map(team => getDownloadURL(ref(FirebaseStorage, `${nameByTeam}/${team}`)))

        const Promesas = await Promise.all(urlTeam)

        dispatch(setAllTeams(Promesas))

    }
}

export const startAddlocalStorage = () => {

    return async (dispatch, getState) => {

        // TODO:

    }
}


