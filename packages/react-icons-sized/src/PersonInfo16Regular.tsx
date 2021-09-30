import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10c0 1.8 1.55 3.65 4.22 3.96a5.5 5.5 0 01-.72-1.16C3.88 12.33 3 11.13 3 10v-.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H3.5C2.67 8 2 8.67 2 9.5v.5zm7.75-5.75c0 .29-.04.56-.12.82-.49.08-.95.22-1.39.41A1.74 1.74 0 007 2.5a1.75 1.75 0 10.4 3.45c-.4.28-.76.6-1.07.97a2.75 2.75 0 113.42-2.67zm.75 3.63a.62.62 0 100 1.24.62.62 0 000-1.24zm0 5.12a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v2c0 .28.22.5.5.5zm0-7a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
}

const PersonInfo16Regular = wrapIcon(rawSvg({}), 'PersonInfo16Regular');
export default PersonInfo16Regular;
      