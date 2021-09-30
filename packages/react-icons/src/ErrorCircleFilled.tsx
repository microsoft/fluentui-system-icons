import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zM10 6a.5.5 0 00-.5.41v4.68a.5.5 0 001 0V6.41A.5.5 0 0010 6z" fill={primaryFill} /></svg>;
}

const ErrorCircleFilled = wrapIcon(rawSvg({}), 'ErrorCircleFilled');
export default ErrorCircleFilled;
      