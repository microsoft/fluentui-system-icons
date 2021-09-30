import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2a1 1 0 00-1 1v2a1 1 0 001 1h.5a.5.5 0 000-1H7V3h.5a.5.5 0 000-1H7zm2.5 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h.5v2h-.5a.5.5 0 000 1h.5a1 1 0 001-1V3a1 1 0 00-1-1h-.5zm-3 3a.5.5 0 000 1h1a.5.5 0 000-1h-1zm-5 2c.28 0 .5.22.5.5v8c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-8a.5.5 0 011 0v8a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 15.5v-8c0-.28.22-.5.5-.5zM7 12a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1H7zM6 8a1 1 0 011-1h.5a.5.5 0 010 1H7v2h.5a.5.5 0 010 1H7a1 1 0 01-1-1V8zm3-.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3 0c0-.28.22-.5.5-.5h.5a1 1 0 011 1v2a1 1 0 01-1 1h-.5a.5.5 0 010-1h.5V8h-.5a.5.5 0 01-.5-.5zm-3 3c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ShortpickFilled = wrapIcon(rawSvg({}), 'ShortpickFilled');
export default ShortpickFilled;
      