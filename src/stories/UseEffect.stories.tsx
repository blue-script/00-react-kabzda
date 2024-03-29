import React, {useEffect, useState} from 'react';

export default {
  title: 'UseEffect demo'
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState<number>(1)
  console.log('SimpleExample')

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString()
  })
  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)')
    document.title = counter.toString()
  }, [])
  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>counter+</button>
  </>
}



export const SetIntervalExample = () => {
  const [counter, setCounter] = useState<number>(1)
  console.log('SetIntervalExample')

  useEffect(() => {
    console.log(counter) // будет всегда 1 из за замыкания
    const id = setInterval(() => {
      setCounter((state) => state + 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return <>
    Hello, counter: {counter}
  </>
}



export const HomeworkClockExample = () => {
  const [date, setDate] = useState(new Date())
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  const time = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
  console.log('HomeworkClockExample')

  useEffect(() => {
    console.log('useEffect')
    setInterval(() => {
      setDate((state) => new Date())
    }, 1000)
  }, [])

  return <>
    Time: {time}
  </>
}

export const ResetEffectExample = () => {
  const [text, setText] = useState<string>('')
  console.log('render component with: ' + text)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key)
      setText( text + e.key)
    }
    window.addEventListener('keypress', handler)
    return ()=>{
      window.removeEventListener('keypress', handler)
    }
  }, [text])

  return <>
    Typed: {text}
  </>
}

export const SetTimeoutExample = () => {
  const [text, setText] = useState<string>('')
  console.log('render component with: ' + text)

  useEffect(() => {
    const timeoutId = setTimeout(()=>{
      console.log('timeout expired')
      setText('3 seconds passed')
    }, 3000)
    return ()=>{
      console.log('clear')
      clearTimeout(timeoutId)
    }
  }, [text])

  return <>
    text: {text}
  </>
}