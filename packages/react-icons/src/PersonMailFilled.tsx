import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /><path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18v-5c0-1.1.9-2 2-2H4z" fill={primaryFill} /><path d="M14.51 15.93l-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43z" fill={primaryFill} /><path d="M14.74 16.94l4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01z" fill={primaryFill} /></svg>;
}

const PersonMailFilled = wrapIcon(rawSvg({}), 'PersonMailFilled');
export default PersonMailFilled;
      