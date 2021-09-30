import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 00-5.09-4.22zm5.5 5.22h-3.76c.06.48.1.99.13 1.5h.52c.96 0 1.79.54 2.2 1.33l.97-.64c.1-.07.2-.13.32-.17a7.97 7.97 0 00-.39-2.02zm-4.77 0c.06.48.11.98.14 1.5H9.5a2.5 2.5 0 00-2.47 2.11 20.2 20.2 0 01.13-3.61h5.68zm-6.54 6c.17.94.4 1.8.7 2.54v1.38a8.03 8.03 0 01-4.2-3.92h3.5zm-3.9-1h3.75a20.52 20.52 0 010-5H2.4a8 8 0 000 5zm5.6-1c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5l2.22-1.48a.5.5 0 01.78.41v7.14a.5.5 0 01-.78.41L16 17v.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 018 17.5v-6z" fill={primaryFill} /></svg>;
}

const GlobeVideoFilled = wrapIcon(rawSvg({}), 'GlobeVideoFilled');
export default GlobeVideoFilled;
      