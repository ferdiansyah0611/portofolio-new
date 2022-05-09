import React, { useState } from 'react'
import {
 Button
} from '@mui/material'
import {
 makeStyles
} from '@mui/styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/Github'
import Refresh from '@mui/icons-material/Refresh'
import Cancel from '@mui/icons-material/Cancel'
import EmailIcon from '@mui/icons-material/Email'

import useLanguange from '@hook/useLanguange'

const style = makeStyles(() => ({
 'btn-profile': {
  marginBottom: '2em'
 }
}))

const ContactHash = () => {
  const classes = style()
  const languange = useLanguange()

  return(
    <section id="contact">
      <div>
        <div>
          <h2>{languange('Kontak Saya')}</h2>
          <p>
            {languange('contact-description')}
          </p>
          <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <Button variant="outlined" size="small" onClick={() => window.open('https://wa.me/62895607486361')} color="green" startIcon={<WhatsAppIcon/>}>Whatsapp</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://www.linkedin.com/in/ferdiansyah-ferdi-68a1a2175/')} color="linkedin" startIcon={<LinkedInIcon/>}>Linkedin</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://instagram.com/fairy.technology')} color="secondary" startIcon={<InstagramIcon/>}>Instagram</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://facebook.com/100009125269386')} startIcon={<FacebookIcon/>}>Facebook</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://github.com/ferdiansyah0611')} color="github" startIcon={<GithubIcon/>}>Github</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('mailto:ferdif9996@gmail.com')} color="secondary" startIcon={<EmailIcon/>}>Email</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHash