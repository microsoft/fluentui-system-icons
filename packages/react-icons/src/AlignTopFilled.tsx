import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM11 7c0-1.1.9-2 2-2h1a2 2 0 012 2v5a2 2 0 01-2 2h-1a2 2 0 01-2-2V7zM6 5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V7a2 2 0 00-2-2H6z" fill={primaryFill} /></svg>;
}

const AlignTopFilled = wrapIcon(rawSvg({}), 'AlignTopFilled');
export default AlignTopFilled;
      