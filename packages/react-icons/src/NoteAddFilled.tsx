import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H6V3.5z" fill={primaryFill} /><path d="M5.5 11a5.5 5.5 0 004.9-8H14a3 3 0 013 2.82V10h-4.18a3 3 0 00-2.81 2.82L10 13v4H6a3 3 0 01-3-2.82V10.4c.75.38 1.6.6 2.5.6z" fill={primaryFill} /><path d="M16.9 11a2 2 0 01-.36.65l-.13.14-4.62 4.62a2 2 0 01-.79.5V12.84a2 2 0 011.84-1.84L13 11h3.9z" fill={primaryFill} /></svg>;
}

const NoteAddFilled = wrapIcon(rawSvg({}), 'NoteAddFilled');
export default NoteAddFilled;
      