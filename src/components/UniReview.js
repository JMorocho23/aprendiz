import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faShield } from '@fortawesome/free-solid-svg-icons'

const UniReview = () => {
  return (
   <div className='row'>
        <div className='col-3 text-center'>
            <h4>3.5</h4>
            <p>Calificacion</p>
        </div>
        <div className=' col-2'>
            <div className='d-inline-flex'>
                <FontAwesomeIcon icon={faPeopleGroup} size="lg" color="#333" />
                <p className='mx-3'>Social</p>
                <p className='mx-3'>4.6</p>
            </div>
        </div>
        <div className=' col-2'>
            <div className='d-inline-flex'>
                <FontAwesomeIcon icon={faShield} size="lg" color="#333" />
                <p className='mx-3'>Seguridad</p>
                <p className='mx-3'>4.6</p>
            </div>
        </div>   
   </div>
  )
}

export default UniReview