import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.97 18H13v-1.5a2.5 2.5 0 00-2.5-2.5h-1a.5.5 0 010-1h1a3.5 3.5 0 013.5 3.5V18h.25c.47 0 .9-.2 1.21-.5h.04v-.04c.29-.3.47-.72.47-1.18v-7.6a2.12 2.12 0 001.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 00-.99-.99 2.45 2.45 0 00-2.44 2.45V7.9a4.28 4.28 0 00-2.95 1.58 6.69 6.69 0 00-1.04 1.8c-.23.46-.39.96-.47 1.49l-.01.06A17.04 17.04 0 005.63 17h-.66a1.97 1.97 0 01-1.44-3.32l.92-.98a3.59 3.59 0 00-.09-4.99l-.9-.9a.5.5 0 10-.7.7l.9.9a2.59 2.59 0 01.06 3.6l-.92 1A2.97 2.97 0 004.97 18z" fill={primaryFill} /></svg>;
}

const AnimalCatFilled = wrapIcon(rawSvg({}), 'AnimalCatFilled');
export default AnimalCatFilled;
      