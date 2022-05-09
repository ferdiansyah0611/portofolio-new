import React, {
  useState,
  useEffect,
} from "react"
import useLanguange from '@hook/useLanguange'
import context from '../context'

function WriterIntro(){
  const ctx = React.useContext(context)
  const [data, setdata] = useState('')
  const languange = useLanguange()
  // typewriter
  useEffect(() => {
    let str = languange('intro-text'),
    last    = 0,
    isIntro2 = false,
    int     = setInterval(() => {
      if(last === str.length){
        setTimeout(() => {
          if(isIntro2){
            setTimeout(() => {
              last = 0
              isIntro2 = false
              str = languange('intro-text')
            }, 2000)
          }else{
            last = ctx.languange === "en" ? 36: 44
            str = languange('intro-text-2')
          }
          isIntro2 = true
        }, 3000)
      }
      last += 1
      setdata(str.slice(0, last))
    }, 200)
    return () => clearInterval(int)
  }, [languange, ctx.languange])
  return(
    <h2 className="font-bold text-3xl text-left w-4/5 mb-2"><span className="writer">{data}</span></h2>
  )
}

export default WriterIntro