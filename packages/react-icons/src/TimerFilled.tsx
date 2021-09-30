import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M14.45 3.93c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 11-.7.71l-1.42-1.41a.5.5 0 010-.71z" fill={primaryFill} /><path d="M16.5 11a7 7 0 11-14 0 7 7 0 0114 0zM9 6.5v5a.5.5 0 001 0v-5a.5.5 0 00-1 0z" fill={primaryFill} /></svg>;
}

const TimerFilled = wrapIcon(rawSvg({}), 'TimerFilled');
export default TimerFilled;
      