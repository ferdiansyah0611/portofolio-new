import React from 'react'

import Home from '@mui/icons-material/Home'
import LibraryBooks from '@mui/icons-material/LibraryBooks'
import Person from '@mui/icons-material/Person'
import RssFeed from '@mui/icons-material/RssFeed'
import AccountCircle from '@mui/icons-material/AccountCircle'
import School from '@mui/icons-material/School'

const en = (text) => {
	switch(text){
		case "intro-text":
			return "Hi, My name is Ferdiansyah and I'm a Web <Developer/>"
			break
		case "intro-text-2":
			return "Hi, My name is Ferdiansyah and I'm a Frontend <Developer/>"
			break
		case "arrayMenu":
			return[
				{
					text: 'Home',
					hash: '',
					icon: <Home className="h-6"/>
				},
				{
					text: 'About',
					hash: 'about',
					icon: <Person className="h-6"/>
				},
				{
					text: 'Project',
					hash: 'project',
					icon: <LibraryBooks className="h-6"/>
				},
				{
					text: 'Certificate',
					hash: 'certificate',
					icon: <School className="h-6"/>
				},
				{
					text: 'Contact',
					hash: 'contact',
					icon: <AccountCircle className="h-6"/>
				},
				{
					text: 'Blog',
					link: 'https://blog-0611.herokuapp.com',
					icon: <RssFeed className="h-6"/>
				}
			]
			break
		case "tentang-description":
			return `I have experience in developing a website. I have a hobby that is learning programming languages.
        	Such as PHP, Python, and TypeScript languages. The location where I live is in South Tangerang City, Banten, Indonesia.`
			break
	    case "list-sekolah":
	    	return [
	    		{name: 'SMK Letris Indonesia 1 - TKJ', year: '2018 - 2021', color: 'primary'},
	    		{name: 'MTs Unwaanunnajah', year: '2015 - 2018', color: 'secondary'},
	    		{name: 'SDN Jombang 4', year: '2009 - 2015', color: 'grey'},
	    	]
	    	break
	    case "Tentang Saya":
	    	return "About Me"
	    	break
	    case "Keahlian":
	    	return "Experience"
	    	break
	    case "Projek Saya":
	    	return "Project"
	    	break
	    case "Sertifikat Saya":
	    	return "Certificate"
	    	break
	    case "Kontak Saya":
	    	return "Contact"
	    	break
	    case "Pendidikan":
    		return "Study"
    		break
	    case "list-keahlian":
	    	return[
	        'Able to use HTML, CSS, SASS, Javascript, and Typescript.',
	        'Can use javascript and css libraries well. Such as React Js, Vue Js, Material UI, Tailwind CSS, Firebase, and Next JS.',
	        'Good understanding of sql and nosql.',
	        'Able to work with a team and able to integrate API'
	      ]
	      break
	    case "contact-description":
	    	return "I am interested in frontend developer or web developer job opportunities, especially ambitious or large projects. However, if you have any other requests or questions, please use this form."
	    	break
	}
}

export default en