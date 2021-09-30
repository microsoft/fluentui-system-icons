import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.97 18h9.28c.95 0 1.72-.77 1.72-1.72v-7.6a2.12 2.12 0 001.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 00-.99-.99 2.45 2.45 0 00-2.44 2.45V7.9a4.28 4.28 0 00-2.95 1.58 8.11 8.11 0 00-1.52 3.35A17.04 17.04 0 005.63 17h-.66a1.97 1.97 0 01-1.44-3.32l.92-.98a3.59 3.59 0 00-.09-4.99l-.9-.9a.5.5 0 10-.7.7l.9.9a2.59 2.59 0 01.06 3.6l-.92 1A2.97 2.97 0 004.97 18zm7.97-15v1.12c0 .28.22.5.5.5h1.93c.4 0 .75.2.96.53l.5.81c.46.75-.08 1.72-.95 1.72h-.41a.5.5 0 00-.5.5v8.1c0 .4-.32.72-.72.72h-.72v-.72a2.93 2.93 0 00-2.93-2.93H9.6a.5.5 0 000 1h1.01c1.07 0 1.93.87 1.93 1.93V17h-5.9A18 18 0 017 13.05c.26-1.1.67-2.16 1.32-2.93A3.32 3.32 0 0111 8.88a.5.5 0 00.5-.5V4.45c0-.8.64-1.44 1.43-1.45z" fill={primaryFill} /></svg>;
}

const AnimalCatRegular = wrapIcon(rawSvg({}), 'AnimalCatRegular');
export default AnimalCatRegular;
      