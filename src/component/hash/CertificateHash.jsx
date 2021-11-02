import React, {useState, useEffect} from 'react'
import {
  Button, ButtonGroup
} from '@mui/material'

import languange from '../../resource/languange'

const certificate = [
  '/cert/PicsArt_10-08-11.58.04.jpg',
  '/cert/IMG_20211008_105149.jpg',
  '/cert/IMG_20211008_105208.jpg',
  '/cert/react_certificate.jpg',
  '/cert/Intermediate_Python_certificate.jpg',
  '/cert/Python-for-Beginners_certificate.jpg',
  '/cert/Python_certificate.jpg',
  '/cert/Responsive-Web-Design_certificate.jpg',
  '/cert/JavaScript_certificate.jpg',
  '/cert/jQuery_certificate.jpg',
  '/cert/CSS_certificate.jpg',
  '/cert/HTML_certificate.jpg'
]

const CertificateHash = ({lang}) => {
  const [countcert, setcountcert] = useState(3)
  const [listcert, setlistcert] = useState([])
  useEffect(() => {
    setlistcert(certificate.filter((d, i) => i <= countcert))
  }, [countcert])
  const morecert = () => {
    setcountcert(countcert + 4)
  }
  const lesscert = () => {
    setcountcert(countcert - 4)
  }

  return(
    <section id="certificate" className="w-full mt-1 sm:mt-10 bg-white dark:bg-gray-800 shadow-md">
      <h2 className="font-bold text-3xl text-center sm:text-left p-5 sm:mt-0 dark:text-white">{languange(lang, 'Sertifikat Saya')}</h2>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row dark:text-white p-5 pt-0">
      {
        listcert.map((data, key) => (
          <div key={key} className="sm:p-1 mt-1 mb-5 sm:mb-5">
            <img width="300px" height={key === 0 ? '320px': '250px'} src={data} className="w-full" alt="img-project" title="img-certificate"/>
          </div>
        ))
      }
      </div>
      <ButtonGroup className="m-5" variant="contained" color="primary">
        <Button onClick={() => countcert !== 3 ? lesscert(): false}>Load Less</Button>
        <Button onClick={() => countcert <= listcert.length ? morecert(): false}>Load more</Button>
      </ButtonGroup>
    </section>
  )
}

export default CertificateHash