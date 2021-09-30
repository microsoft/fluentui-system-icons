import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.87 2.67l4.97 4.97c.88.88.88 2.3 0 3.18l-8.68 8.68h6.1c.37 0 .69.28.74.65v.1c0 .38-.28.7-.64.74l-.1.01H9.83a2.24 2.24 0 01-1.71-.65l-4.97-4.97a2.25 2.25 0 010-3.18l9.53-9.53c.88-.88 2.3-.88 3.18 0zM11.7 17.76L5.74 11.8l-1.5 1.47c-.3.3-.3.77 0 1.06l4.94 4.95c.3.28.77.28 1.06-.02l1.46-1.5z" fill={primaryFill} /></svg>;
}

const Eraser24Filled = wrapIcon(rawSvg({}), 'Eraser24Filled');
export default Eraser24Filled;
      