import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPeopleGroup, faFlag, faShield } from '@fortawesome/free-solid-svg-icons'

const TeacherReview = () => {
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
                    <h5 className="card-title">Juan Morocho</h5>
                    <p className="card-text">Ingenieria</p>
                    <p className="card-text"><small className="text-muted">Universidad del Azuay</small></p>
                    <div className="d-flex">
                        <p className="mr-2">Si: Tomaría de nuevo</p>
                        <p className="text-muted mx-2">|</p>
                        <p className="mr-2">Nivel de dificultad: 3.9</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div> 
    </div>
  )
}

export default TeacherReview