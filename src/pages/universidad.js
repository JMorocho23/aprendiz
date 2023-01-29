import React from 'react'
//Compent Imports
import Header from '../components/Header'
import UniReview from '../components/UniReview'
import UniReviews from '../components/UniReviews'
import TeacherReview from '@/components/TeacherReview'
//Pages Import
import Link from 'next/link'

const universidad = () => {
  return (
    <>
        <Header/>
        <div className='container mt-5'>
        <Link href="/">Inicio</Link>
          <div className='row p-5 mb-4 bg-light rounded-3'>
            <div className='col text-left'>
              <h3>
              Universidad Del Azuay
              </h3>
              <p>Estudia más fácil, más rápido y mejor.</p>
            </div>
            <div className='row'>
              <div className='col'>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-link">Ver todos Profesores</button>
                    <button type="button" className="btn btn-link">Corregir</button>
                </div>
              </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <button type="button" className="btn btn-primary">Calificar esta Universidad</button>
                </div>
            </div>
          </div>
          <UniReview/>
          <h5 className='my-3'>1 Reseñas</h5>
          <UniReviews/>
          <TeacherReview/>
        </div>
    </>

  )
}

export default universidad