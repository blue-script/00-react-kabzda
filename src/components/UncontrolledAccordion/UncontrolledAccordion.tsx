import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';
import {OnOff} from '../OnOff/OnOff';

type AccordionPropsType = {
  titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('Accordion rendering')

  // const [collapsed, setCollapsed] = useState(false)
  const [state, dispatch] = useReducer(reducer, {collapsed: false})

  return <div>
    {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
    <AccordionTitleWhithMemo title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_COLLAPSED})}}/>
    {!state.collapsed && <AccordionBodyWhithMemo/>}
  </div>
}
export const UncontrolledAccordionWhithMemo= React.memo(UncontrolledAccordion)

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering')
  return <h3 onClick={() => {
    props.onClick()
  }}>-- {props.title} --</h3>
}
export const AccordionTitleWhithMemo= React.memo(AccordionTitle)

function AccordionBody() {
  console.log('AccordionBody rendering')
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}
export const AccordionBodyWhithMemo= React.memo(AccordionBody)