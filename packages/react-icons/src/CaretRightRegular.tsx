import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.63 14.98A1 1 0 017 14.2V5.8a1 1 0 011.63-.78l4.72 3.81c.74.6.74 1.74 0 2.34l-4.72 3.81zM8 5.8v8.4l4.72-3.81a.5.5 0 000-.78L8 5.8z" fill={primaryFill} /></svg>;
}

const CaretRightRegular = wrapIcon(rawSvg({}), 'CaretRightRegular');
export default CaretRightRegular;
      