import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 15.06l6.72 6.72a.75.75 0 001.06-1.06L3.28 2.22a.75.75 0 10-1.06 1.06L8.94 10 4 14.94c-.28.28-.48.62-.58 1l-1.4 5.11a.75.75 0 00.93.92l5.11-1.4c.38-.1.73-.3 1-.57L14 15.06z" fill={primaryFill} /><path d="M19 10.06l-2.88 2.88-5.06-5.06L13.94 5 19 10.06z" fill={primaryFill} /><path d="M21.03 2.97a3.58 3.58 0 010 5.06l-.97.97L15 3.94l.97-.97a3.58 3.58 0 015.06 0z" fill={primaryFill} /></svg>;
}

const EditOff24Filled = wrapIcon(rawSvg({}), 'EditOff24Filled');
export default EditOff24Filled;
      