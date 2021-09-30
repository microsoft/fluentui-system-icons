import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4a1 1 0 10-2 0v15.25a1 1 0 002 .1c.61.41 1.34.65 2.11.65 2.27 0 4.11-2.07 4.11-4.63 0-2.55-1.84-4.62-4.1-4.62-.78 0-1.5.24-2.12.66V4zm2.11 14c-.95 0-2.11-.95-2.11-2.63 0-1.67 1.16-2.62 2.11-2.62s2.11.95 2.11 2.63c0 1.67-1.16 2.62-2.1 2.62zM11 19.26v-5.71a3.34 3.34 0 00-.98-2.34c-.6-.58-1.45-.9-2.47-.95h-.3a4.7 4.7 0 00-2.83.68 1 1 0 101.15 1.64c.33-.23.93-.37 1.88-.32.59.03.96.17 1.19.4.17.16.29.4.34.74a7.7 7.7 0 00-2.6-.13 4.02 4.02 0 00-2.47 1.14c-.6.61-.91 1.43-.91 2.35 0 2.1 1.53 3.5 3.5 3.5.8 0 1.65-.24 2.54-.7.13.4.5.7.96.7h.13a1 1 0 00.87-1zM5 16.8c0-.42.13-.76.38-1 .26-.25.66-.44 1.24-.51a5.8 5.8 0 012.26.18l.12.04v1.77l-.14.1c-.96.63-1.75.92-2.36.92-.47 0-.84-.15-1.09-.4A1.5 1.5 0 015 16.8z" fill={primaryFill} /></svg>;
}

const TextCaseLowercase24Filled = wrapIcon(rawSvg({}), 'TextCaseLowercase24Filled');
export default TextCaseLowercase24Filled;
      