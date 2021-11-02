import id from './id'
import en from './en'

const init = (lang, text) => {
	switch(lang){
		case "id":
			return id(text)
			break
		case "en":
			return en(text)
			break
	}
}

export default init