import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.68 22c-.9-1.5-.7-3.45.58-4.74L15.53 14H6.25C5.01 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6 1.5 2.1 3.91 3.16 7.17 3.23zM17 7A5 5 0 107 7a5 5 0 0010 0zm.97 5.97a2.87 2.87 0 114.06 4.06l-5 5a2.87 2.87 0 11-4.06-4.06l5-5zm3 1.06a1.37 1.37 0 00-1.94 0L17.06 16 19 17.94l1.97-1.97c.54-.54.54-1.4 0-1.94zm-3.94 6a.75.75 0 10-1.06-1.06l-1 1a.75.75 0 101.06 1.06l1-1z" fill={primaryFill} /></svg>;
}

const PersonPill24Filled = wrapIcon(rawSvg({}), 'PersonPill24Filled');
export default PersonPill24Filled;
      