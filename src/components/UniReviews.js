import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPeopleGroup, faFlag, faShield } from '@fortawesome/free-solid-svg-icons'

const UniReviews = () => {
  return (
    <div className="row">
        <div className='col-8'>
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4 text-center align-self-center">
                <h4>3.5</h4>
                <p>Calificacion</p>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Excelente!</h5>
                    <div className="d-flex justify-content-left align-items-center">
                        <div className="text-warning">
                            <FontAwesomeIcon icon={faStar} size="lg" color="#333" />
                            <FontAwesomeIcon icon={faStar} size="lg" color="#333" />
                            <FontAwesomeIcon icon={faStar} size="lg" color="#333" />
                            <FontAwesomeIcon icon={faStar} size="lg" color="#333" />
                            <FontAwesomeIcon icon={faStar} size="lg" color="#333" />
                        </div>
                        <span className="mx-2 text-muted">5.0</span>
                    </div>
                    <p className="card-text"><small className="text-muted">Enero 8, 2023</small></p>
                    <p className="card-text">Gran lugar con grandes oportunidades para todos. ¡Esta universidad es un chupador de dinero, pero ofrece infinitas oportunidades a cambio!</p>
                    <div className='row'>
                        <div className=' col-5'>
                            <div className='d-inline-flex'>
                                <FontAwesomeIcon icon={faPeopleGroup} size="lg" color="#333" />
                                <p className='mx-3'>Social</p>
                                <p className='mx-3'>4.6</p>
                            </div>
                        </div>
                        <div className=' col-5'>
                            <div className='d-inline-flex'>
                                <FontAwesomeIcon icon={faShield} size="lg" color="#333" />
                                <p className='mx-3'>Social</p>
                                <p className='mx-3'>4.6</p>
                            </div>
                        </div>
                        <div className='col-2'>
                            <span className="mx-2 text-muted">
                                <FontAwesomeIcon icon={faFlag} size="lg" color="#333" />
                            </span>
                        </div>    
                    </div>                

                </div>
            </div>
        </div>
        </div>
        </div> 
    </div>
  )
}

export default UniReviews