import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Paginacion = ({tipo, currentPage}) => {

    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);

    useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

    const getNext = () => { 
        setNumeros((prevNum) => prevNum.map(num => num + 5))
    }

    const getPrevious = () => { 
        
        setNumeros((prevNum) => {
            if (prevNum[0] === 1) { 
                return prevNum; 
            } return prevNum.map(num => num - 5);
        })
    }


  return (
    <>
    <nav aria-label="Page navigation example" className="flex justify-end m-4">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a onClick={getPrevious} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-blue-600 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            {
                numeros.map((num, index)=>(
                    <li key={index}>
                        <Link to={`/${tipo}/${num}`} className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-blue-600 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{num}</Link>
                    </li>
                ))
            }
            <li>
              <a onClick={getNext} className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-blue-600 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Paginacion