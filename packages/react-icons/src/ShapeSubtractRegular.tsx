import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5V10.56c.01.48.16.94.41 1.32l.02.02A2.52 2.52 0 004.3 13H7v2.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H13V4.5a2.52 2.52 0 00-.41-1.38l-.02-.02A2.51 2.51 0 0010.51 2H4.5zm.64 1L3 5.14V4.5C3 3.67 3.67 3 4.5 3h.64zM3 6.56L6.56 3h1.58L3 8.14V6.56zM9.56 3h.94c.23 0 .45.05.65.15l-8 8A1.5 1.5 0 013 10.5v-.94L9.56 3zm2.3.85c.09.2.14.42.14.65v.8L10.3 7h-.8c-.36 0-.7.07-1 .2l3.35-3.35zM7.2 8.5c-.14.3-.21.64-.21 1v.8L5.3 12h-.8a1.5 1.5 0 01-.65-.15L7.21 8.5zm.79 1C8 8.67 8.67 8 9.5 8h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 018 15.5v-6z" fill={primaryFill} /></svg>;
}

const ShapeSubtractRegular = wrapIcon(rawSvg({}), 'ShapeSubtractRegular');
export default ShapeSubtractRegular;
      