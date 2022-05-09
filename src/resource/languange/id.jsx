import React from 'react'

import Home from '@mui/icons-material/Home'
import LibraryBooks from '@mui/icons-material/LibraryBooks'
import Person from '@mui/icons-material/Person'
import RssFeed from '@mui/icons-material/RssFeed'
import AccountCircle from '@mui/icons-material/AccountCircle'
import School from '@mui/icons-material/School'

const id = (text) => {
  switch(text){
    case "intro-text":
      return "Hai, Nama saya Ferdiansyah dan saya seorang Web <Developer/>"
      break
    case "intro-text-2":
      return "Hai, Nama saya Ferdiansyah dan saya seorang Frontend <Developer/>"
      break
    case "arrayMenu":
      return[
        {
          text: 'Beranda',
          hash: '',
          icon: <Home className="h-6"/>
        },
        {
          text: 'Tentang',
          hash: 'about',
          icon: <Person className="h-6"/>
        },
        {
          text: 'Projek',
          hash: 'project',
          icon: <LibraryBooks className="h-6"/>
        },
        {
          text: 'Sertifikat',
          hash: 'certificate',
          icon: <School className="h-6"/>
        },
        {
          text: 'Kontak',
          hash: 'contact',
          icon: <AccountCircle className="h-6"/>
        },
        {
          text: 'Blog',
          link: 'https://ferdiansyah-blog.herokuapp.com',
          icon: <RssFeed className="h-6"/>
        }
      ]
      break
    case "tentang-description":
      return `Saya memiliki pengalaman dalam pengembangan sebuah website. Saya memiliki hobby yaitu mempelajari bahasa pemograman.
          Seperti bahasa PHP, Python, dan TypeScript. Untuk tempat lokasi yang saya tinggal berada di Kota Tangerang Selatan, Banten, Indonesia.`
      break
    case "list-sekolah":
      return [
        {name: 'SMK Letris Indonesia 1 - TKJ', year: '2018 - 2021', color: 'primary'},
        {name: 'MTs Unwaanunnajah', year: '2015 - 2018', color: 'secondary'},
        {name: 'SDN Jombang 4', year: '2009 - 2015', color: 'grey'},
      ]
      break
    case "Tentang Saya":
      return "Tentang Saya"
      break
    case "Keahlian":
      return "Keahlian"
      break
    case "Projek Saya":
      return "Projek"
      break
    case "Sertifikat Saya":
      return "Sertifikat"
      break
    case "Kontak Saya":
      return "Kontak"
      break
    case "Pendidikan":
      return "Pendidikan"
      break
    case "list-keahlian":
      return[
        'Mampu menggunakan HTML, CSS, SASS, Javascript, dan Typescript',
        'Dapat menggunakan perpustakaan javascript dan css dengan baik. Seperti React Js, Redux, Vue Js, Material UI, Tailwind CSS, Firebase, Express Js, mongoose, dan Sequelize',
        'Memahami sql dan nosql dengan baik',
        'Mampu bekerjasama dengan tim dan mampu mengintregasikan API',
        'Bisa membuat unit testing dengan mocha dan supertest',
        'Bisa menggunakan figma untuk membuat prototype desain website'
      ]
      break
    case "contact-description":
      return "Saya tertarik dengan peluang kerja frontend developer ataupun web developer, terutama proyek yang ambisius atau besar. Namun, jika Anda memiliki permintaan atau pertanyaan lain, silakan chat saya."
      break
    case "Figma Saya":
        return "Figma Saya"
        break
  }
}

export default id