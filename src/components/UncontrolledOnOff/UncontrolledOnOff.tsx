import React, {useState} from 'react';
import {OnOff} from '../OnOff/OnOff';

type PropsType = {
  onChange: (on: boolean) => void
  defaultOn?: boolean
}

export const UncontrolledOnOff: React.FC<PropsType> = (props) => {
  let [on, setOn] = useState(Boolean(props.defaultOn))

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: on ? 'green' : 'white',
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: on ? 'white' : 'red',
  }
  const indicatorStyle = {
    border: '1px solid black',
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: on ? 'green' : 'red',
  }

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }
  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>On</div>
      <div style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
export const UncontrolledOnOffWhithMemo= React.memo(UncontrolledOnOff)
