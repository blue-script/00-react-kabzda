import React from 'react';
import {Accordion} from '../Accordion/Accordion';

type PropsType = {
  on: boolean
  onChange: (value: boolean) => void
}

export const OnOff: React.FC<PropsType> = (props) => {
  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: props.on ? 'green' : 'white',
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: props.on ? 'white' : 'red',
  }
  const indicatorStyle = {
    border: '1px solid black',
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.on ? 'green' : 'red',
  }

  return (
    <div>
      <div style={onStyle} onClick={() => {
        props.onChange(true)
      }}>On
      </div>
      <div style={offStyle} onClick={() => {
        props.onChange(false)
      }}>Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
export const OnOffWhithMemo= React.memo(OnOff)