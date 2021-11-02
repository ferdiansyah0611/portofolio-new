import React, {useState} from 'react'
import {
  Button
} from '@mui/material'
import {
  makeStyles
} from '@mui/styles'
import Refresh from '@mui/icons-material/Refresh'
import Cancel from '@mui/icons-material/Cancel'

import languange from '../../resource/languange'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyB6waWNLXdkIbZ3P8evt64oMBjobbs5KRo",
  authDomain: "ferdiansyah.firebaseapp.com",
  projectId: "ferdiansyah",
  storageBucket: "ferdiansyah.appspot.com",
  messagingSenderId: "567702802044",
  appId: "1:567702802044:web:9d7aa10fef5f74a07183f9"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

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
    if(!waiting && name.length >= 2 && subject.length >= 2 && email.match(/\S+@\S+\.\S+/) && message.length >= 10){
      setwaiting(true)
      setTimeout(async() => {
        await addDoc(collection(db, "contact"), {
          name: name,
          email: email,
          subject: subject,
          message: message
        }).then(() => {
          setresponded({msg: "Successfuly send", type: 'success'})
          setwaiting(false)
          document.querySelector('#reset-contact-me').click()
          setTimeout(() => setresponded({msg: '', type: 'success'}), 6000)
        }).catch((e) => {
          setresponded({msg: e.message, type: 'error'})
          setwaiting(false)
          setTimeout(() => setresponded({msg: '', type: 'error'}), 6000)
        })
      }, 2000)
    }
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
    <section id="contact" className="w-full mt-1 sm:mt-10">
      <div className="sm:flex sm:justify-center">
        <div className="md:w-1/2 text-center bg-white dark:bg-gray-800 p-3 shadow-md">
          <h2 className="font-bold text-3xl mb-5 mt-5 dark:text-white">{languange(lang, 'Kontak Saya')}</h2>
          <p className="mb-5 dark:text-white">
            {languange(lang, 'contact-description')}
          </p>
          <form onSubmit={contactme}>
            <div className={
              responded.msg ?
                'w-full justify-center fixed left-0 top-20 flex transform scale-100 duration-1000'
              : 'w-full justify-center fixed left-0 top-20 flex transform scale-0 duration-1000'
              }>
              {
                responded.type === 'success' ?
                (
                  <div className="w-4/5 sm:w-60 shadow-xl p-4 bg-green-500 text-white font-bold flex space-x-2 rounded-sm">
                    <h6 className="flex-1 text-left" style={{wordBreak: 'break-word'}}>{responded.msg}</h6>
                    <Cancel onClick={e => setresponded({msg: '', type: 'success'})} className="h-6 cursor-pointer"/>
                  </div>
                ): false
              }
              {
                responded.type === 'error' ?
                (
                  <div className="w-4/5 sm:w-60 shadow-xl p-4 bg-red-500 text-white font-bold flex space-x-2 rounded-sm">
                    <h6 className="flex-1 text-left" style={{wordBreak: 'break-word'}}>{responded.msg}</h6>
                    <Cancel onClick={e => setresponded({msg: '', type: 'success'})} className="h-6 cursor-pointer"/>
                  </div>
                ): false
              }
            </div>
            <div className="flex">
              <input
                disabled={waiting ? true: false}
                autoComplete="off"
                name="name"
                type="text"
                required={true}
                placeholder="Name"
                onKeyUp={nameValidate}
                className="transition-all duration-500 p-3 rounded-md bg-gray-100 dark:bg-gray-900 m-1 w-1/2 outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-blue-900 dark:text-white"
              />
              <input
                disabled={waiting ? true: false}
                autoComplete="off"
                name="email"
                type="email"
                required={true}
                placeholder="Email"
                onKeyUp={emailValidate}
                className="transition-all duration-500 p-3 rounded-md bg-gray-100 dark:bg-gray-900 m-1 w-1/2 outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-blue-900 dark:text-white
              "/>
            </div>
            <div className="flex">
              <input
                disabled={waiting ? true: false}
                autoComplete="off"
                name="subject"
                type="text"
                required={true}
                placeholder="Subject"
                onKeyUp={subjectValidate}
                className="transition-all duration-500 p-3 rounded-md bg-gray-100 dark:bg-gray-900 m-1 w-full outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-blue-900 dark:text-white"/>
            </div>
            <div className="flex">
              <textarea
                disabled={waiting ? true: false}
                autoComplete="off"
                name="msg"
                required={true}
                onKeyUp={messageValidate}
                className="transition-all duration-500 p-3 rounded-md bg-gray-100 dark:bg-gray-900 m-1 w-full outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-blue-900 h-32 max-h-32 w-full dark:text-white"
                placeholder="Message"></textarea>
            </div>
            <div className="w-full flex justify-center mt-2">
              <button className="hidden" id="reset-contact-me" type="reset"></button>
              <Button
                name="accepted"
                type="submit"
                color="primary" variant="contained"
                className={classes.btn}
              >
              {
                waiting ? (
                  <>
                    <Refresh className="animate-spin h-6 w-6 mr-3"/>
                    <span>Loading</span>
                  </>
                ): (
                  <span>Submit</span>
                )
              }
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactHash