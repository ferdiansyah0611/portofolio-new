import React, {
  useState as state,
  useRef as ref,
  useEffect as effect,
} from "react"
// import { gsap } from "gsap"

import languange from '../resource/languange'

function WriterIntro(props){
  // state
  const [data, setdata] = state('')
  // gsap
  const ex = ref(null)
  // effect(() => {
  //   gsap.from(ex.current, {
  //     duration: 1,
  //     ease: "expo.out",
  //     x: 100
  //   });
  // }, []);
  // typewriter
  effect(() => {
    let str = languange(props.lang, 'intro-text'),
    last    = 0,
    isIntro2 = false,
    int     = setInterval(() => {
      if(last === str.length){
        setTimeout(() => {
          if(isIntro2){
            setTimeout(() => {
              last = 0
              isIntro2 = false
              str = languange(props.lang, 'intro-text')
            }, 2000)
          }else{
            last = props.lang === "en" ? 36: 44
            str = languange(props.lang, 'intro-text-2')
          }
          isIntro2 = true
        }, 3000)
      }
      last += 1
      setdata(str.slice(0, last))
    }, 200)
    return () => clearInterval(int)
  }, [props.lang])
  return(
    <h2 ref={ex} className="font-bold text-3xl text-left w-4/5 mb-2"><span className="writer">{data}</span></h2>
  )
}

export default WriterIntro