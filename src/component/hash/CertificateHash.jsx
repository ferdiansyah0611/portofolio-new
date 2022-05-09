import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
 Button,
 ButtonGroup,
 Dialog,
 DialogContent,
 DialogActions,
 useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useLanguange from '@hook/useLanguange'

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

const DialogCertificate = ({ open, onClose }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  return(
    <Dialog fullScreen={fullScreen} onClose={onClose} open={Boolean(open)}>
      <DialogContent>
        <img className="w-full" src={open} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>close</Button>
      </DialogActions>
    </Dialog>
  )
}

const CertificateHash = () => {
  const languange = useLanguange()
  const refcertificate = useRef(null)
  const [countcert, setcountcert] = useState(3)
  const [opencert, setopencert] = useState(null)

  const [paginatecert, setpaginatecert] = useState(0)
  const [nowcert, setnowcert] = useState(0)
  const [listcert, setlistcert] = useState([])
  useEffect(() => {
   setlistcert(certificate.filter((d, i) => i <= countcert))
  }, [countcert])

  useEffect(() => {
   var data = certificate.filter((d, i) => nowcert > 0 ? i >= (4 * nowcert) : i <= 4).slice(0, 4)
   setlistcert(data)
  }, [nowcert])
  useEffect(() => {
   setpaginatecert(certificate.length / 4)
  }, [])
  const changepaginate = useCallback((i) => {
   setnowcert(i)
   window.scrollTo(0, refcertificate.current.offsetTop - 100)
  }, [refcertificate.current])

  return(
    <>
      <DialogCertificate
        open={opencert}
        onClose={() => setopencert(null)}
      />
      <section ref={refcertificate} id="certificate">
        <h2>{languange('Sertifikat Saya')}</h2>
        <div className="grid-list">
        {
          listcert.map((data, key) => (
              <img key={data} data-aos="fade-up" onClick={() => setopencert(data)} width="300px" height={key === 0 ? '320px': '250px'} src={data} className="w-full" alt="img-cert" title="img-certificate"/>
          ))
        }
        </div>
        <ButtonGroup size="small" disableElevation className="m-5" variant="contained" color="primary">
          {Array.from(new Array(paginatecert)).map((v, i) => (
            <Button key={i} onClick={() => changepaginate(i)}>{i + 1}</Button>
          ))}
        </ButtonGroup>
      </section>
    </>
  )
}

export default CertificateHash