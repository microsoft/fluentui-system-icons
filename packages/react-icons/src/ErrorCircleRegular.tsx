import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 9.5a.75.75 0 110 1.5.75.75 0 010-1.5zM10 6a.5.5 0 01.5.41V11a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ErrorCircleRegular = wrapIcon(rawSvg({}), 'ErrorCircleRegular');
export default ErrorCircleRegular;
      