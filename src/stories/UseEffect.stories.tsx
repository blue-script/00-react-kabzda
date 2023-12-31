import React, {useEffect, useState} from 'react';

export default {
  title: 'UseEffect demo'
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState<number>(1)
  console.log('SimpleExample')

  useEffect(()=>{
    console.log('useEffect every render')
    document.title = counter.toString()
  })
  useEffect(()=>{
    console.log('useEffect only first render (componentDidMount)')
    document.title = counter.toString()
  }, [])
  useEffect(()=>{
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={()=>setFake(fake+1)}>fake+</button>
    <button onClick={()=>setCounter(counter+1)}>counter+</button>
  </>
}

export const SetTimoutExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState<number>(1)
  console.log('SetTimoutExample')

  // useEffect(()=>{
  //   console.log('setTimeout')
  //   setTimeout(()=>{
  //     document.title = counter.toString()
  //   }, 1000)
  // }, [counter])

  useEffect(()=>{
    console.log(counter) // будет всегда 1 из за замыкания
    setInterval(()=>{
      setCounter((state)=>state+1)
    }, 1000)
  }, [])



  return <>
    Hello, counter: {counter} - fake: {fake}
    {/*<button onClick={()=>setFake(fake+1)}>fake+</button>*/}
    {/*<button onClick={()=>setCounter(counter+1)}>counter+</button>*/}
  </>
}