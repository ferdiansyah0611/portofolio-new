import React, {useState} from 'react'
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

import languange from '../../resource/languange'

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js"
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js"

// const firebaseConfig = {
//   apiKey: "AIzaSyB6waWNLXdkIbZ3P8evt64oMBjobbs5KRo",
//   authDomain: "ferdiansyah.firebaseapp.com",
//   projectId: "ferdiansyah",
//   storageBucket: "ferdiansyah.appspot.com",
//   messagingSenderId: "567702802044",
//   appId: "1:567702802044:web:9d7aa10fef5f74a07183f9"
// };
// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

const style = makeStyles(() => ({
  'btn-profile': {
    marginBottom: '2em'
  }
}))

const ContactHash = ({lang}) => {
  const classes = style()

  const [responded, setresponded] = useState({msg: '', type: ''})
  const [waiting, setwaiting] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')

  const contactme = (e) => {
    e.preventDefault()
    // if(!waiting && name.length >= 2 && subject.length >= 2 && email.match(/\S+@\S+\.\S+/) && message.length >= 10){
    //   setwaiting(true)
    //   setTimeout(async() => {
    //     await addDoc(collection(db, "contact"), {
    //       name: name,
    //       email: email,
    //       subject: subject,
    //       message: message
    //     }).then(() => {
    //       setresponded({msg: "Successfuly send", type: 'success'})
    //       setwaiting(false)
    //       document.querySelector('#reset-contact-me').click()
    //       setTimeout(() => setresponded({msg: '', type: 'success'}), 6000)
    //     }).catch((e) => {
    //       setresponded({msg: e.message, type: 'error'})
    //       setwaiting(false)
    //       setTimeout(() => setresponded({msg: '', type: 'error'}), 6000)
    //     })
    //   }, 2000)
    // }
  }

  var validate = (type, e) => {
    if(type === 200){
      e.target.classList.add('bg-blue-100', 'dark:bg-blue-900')
      e.target.classList.remove('bg-gray-100', 'dark:bg-gray-900')
    }else{
      e.target.classList.remove('bg-blue-100', 'dark:bg-blue-900')
      e.target.classList.add('bg-gray-100', 'dark:bg-gray-900')
    }
  }
  var nameValidate = (e) => {
    setname(e.target.value)
    if(e.target.value.length <= 2){
      validate(null, e)
    }else{
      validate(200, e)
    }
  }, emailValidate = (e) => {
    setemail(e.target.value)
    if(!e.target.value.match(/\S+@\S+\.\S+/)){
      validate(null, e)
    }else{
      validate(200, e)
    }
  }, subjectValidate = (e) => {
    setsubject(e.target.value)
    if(e.target.value.length <= 2){
      validate(null, e)
    }else{
      validate(200, e)
    }
  }, messageValidate = (e) => {
    setmessage(e.target.value)
    if(e.target.value.length <= 10){
      validate(null, e)
    }else{
      validate(200, e)
    }
  }

  return(
    <section id="contact">
      <div>
        <div>
          <h2>{languange(lang, 'Kontak Saya')}</h2>
          <p>
            {languange(lang, 'contact-description')}
          </p>
          <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <Button variant="outlined" size="small" onClick={() => window.open('https://wa.me/62895607486361')} color="green" startIcon={<WhatsAppIcon/>}>62895607486361</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://www.linkedin.com/in/ferdiansyah-ferdi-68a1a2175/')} color="linkedin" startIcon={<LinkedInIcon/>}>Ferdi Ferdiansyah</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://instagram.com/fairy.technology')} color="secondary" startIcon={<InstagramIcon/>}>fairy.technology</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://facebook.com/100009125269386')} startIcon={<FacebookIcon/>}>Ferdi Ferdiansyah</Button>
            <Button variant="outlined" size="small" onClick={() => window.open('https://github.com/ferdiansyah0611')} color="github" startIcon={<GithubIcon/>}>ferdiansyah0611</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHash