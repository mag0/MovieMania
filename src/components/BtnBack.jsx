import { useNavigate } from 'react-router-dom';

const BtnBack = () => {

 const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-end mx-4 my-6">
      <button 
        onClick={() => navigate(-1)} 
        className="px-3 py-2 bg-red-800 text-white rounded hover:bg-red-900 text-base"
      >
        Back
      </button>
    </div>
    </>
  )
}

export default BtnBack