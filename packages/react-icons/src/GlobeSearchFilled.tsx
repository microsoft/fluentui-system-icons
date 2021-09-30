import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22zm5.05 1.52a7.18 7.18 0 00-.83-1.52A8.02 8.02 0 0117.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7zm4.66 3.7h-3.75a20.54 20.54 0 010 5h3.75a7.99 7.99 0 000-5zm-3.9 6h3.5a8.02 8.02 0 01-5.09 4.22c.31-.43.59-.94.83-1.52.32-.78.58-1.7.76-2.7zm-4.14.44c.07-.14.13-.29.18-.44h2.94a12.22 12.22 0 01-.87 2.77 1.5 1.5 0 00-.25-.33l-2-2zm.41-1.44h2.87a19.44 19.44 0 000-5H7.16l-.04.3a4.5 4.5 0 012.85 4.7zm-3.82-5v.05a4.54 4.54 0 00-.65-.05h.65zm-3.75 0h3.1c-1.39 0-2.63.63-3.45 1.61.06-.55.18-1.1.35-1.61zm3.1 8c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L8.3 14.1a3.5 3.5 0 10-2.8 1.4zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const GlobeSearchFilled = wrapIcon(rawSvg({}), 'GlobeSearchFilled');
export default GlobeSearchFilled;
      