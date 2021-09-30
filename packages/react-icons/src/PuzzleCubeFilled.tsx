import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 17h1.5a2.5 2.5 0 002.5-2.5V13h-4v4zm0-5V8h4v4h-4zm-1 0H8V8h4v4zm-4 1h4v4H8v-4zm-1-1V8H3v4h4zm-4 1h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-1-4v4H8V3h4z" fill={primaryFill} /></svg>;
}

const PuzzleCubeFilled = wrapIcon(rawSvg({}), 'PuzzleCubeFilled');
export default PuzzleCubeFilled;
      