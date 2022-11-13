import { useEffect, useState } from "react"
import { dictionaryTeams } from "../figurines/helpers/dictionaryTeams"


export const usePagination = () => {


    const dictionary = dictionaryTeams

    const [counter, setCounter] = useState(0)

    const [actualPage, setActualPage] = useState(dictionary[counter])


    const handleChangeNextPage = () => {
        if (counter < 31) setCounter(counter + 1)
    }


    const handleChangePrevPage = () => {
        if (counter > 0) setCounter(counter - 1)
        else if (counter < 0) setCounter(0)
    }

    useEffect(() => {

        setActualPage(dictionary[counter])

    }, [counter])



    return {

        actualPage,
        setActualPage,
        handleChangeNextPage,
        handleChangePrevPage
    }
}
