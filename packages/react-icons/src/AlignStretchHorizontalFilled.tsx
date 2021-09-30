import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17.5a.5.5 0 001 0v-15a.5.5 0 00-1 0v15zm13 0a.5.5 0 001 0v-15a.5.5 0 00-1 0v15zM13 16a2 2 0 002-2v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1c0 1.1.9 2 2 2h6zm2-9a2 2 0 01-2 2H7a2 2 0 01-2-2V6c0-1.1.9-2 2-2h6a2 2 0 012 2v1z" fill={primaryFill} /></svg>;
}

const AlignStretchHorizontalFilled = wrapIcon(rawSvg({}), 'AlignStretchHorizontalFilled');
export default AlignStretchHorizontalFilled;
      