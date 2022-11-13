

export const ButtonsPagination = ({ onNextPage, onPrevPage }) => {



    return (
        <>

            <button
                className='btn btn-lg btn-dark btnRounded marginRight'
                onClick={() => onPrevPage()}
            >

                <i className="bi bi-arrow-left-circle"></i>
            </button>


            <button
                className='btn btn-lg btn-dark ml-3 btnRounded'
                onClick={() => onNextPage()}
            >

                <i className="bi bi-arrow-right-circle"></i>
            </button>

        </>
    )
}
