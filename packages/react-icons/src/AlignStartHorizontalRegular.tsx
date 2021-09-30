import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 18a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zM8 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h2a2 2 0 002-2V6a2 2 0 00-2-2H8zM7 6a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V6z" fill={primaryFill} /></svg>;
}

const AlignStartHorizontalRegular = wrapIcon(rawSvg({}), 'AlignStartHorizontalRegular');
export default AlignStartHorizontalRegular;
      