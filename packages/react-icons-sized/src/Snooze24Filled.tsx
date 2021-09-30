import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 12.5a1 1 0 01.85 1.54l-.07.09L5.08 20H9a1 1 0 011 .88V21a1 1 0 01-.88 1H3a1 1 0 01-.85-1.53l.07-.1 4.7-5.87H3a1 1 0 01-1-.88v-.12a1 1 0 01.88-.99H9zM21 2a1 1 0 01.84 1.54l-.07.1L14.11 13H21a1 1 0 011 .88V14a1 1 0 01-.88 1H12a1 1 0 01-.84-1.54l.07-.1L18.89 4H12a1 1 0 01-1-.88V3a1 1 0 01.88-1H21z" fill={primaryFill} /></svg>;
}

const Snooze24Filled = wrapIcon(rawSvg({}), 'Snooze24Filled');
export default Snooze24Filled;
      