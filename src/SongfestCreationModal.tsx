import './SongfestCreationModal.css'

function SongfestCreationModal({onClose} : any) {
    return (
        <>
            <form className="modal">
                <button onClick={onClose}> &times; </button>

                
            </form>
        </>
    )
}

export default SongfestCreationModal

// Note: next step: figure out what to put in the popup