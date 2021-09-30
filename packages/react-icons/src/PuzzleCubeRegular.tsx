import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 14.5V7h4V3h7.5A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5zM8 4v3h4V4H8zm5 0v3h3V5.5c0-.83-.67-1.5-1.5-1.5H13zm3 4h-3v4h3V8zm0 5h-3v3h1.5c.83 0 1.5-.67 1.5-1.5V13zm-4 3v-3H8v3h4zm-5 0v-3H4v1.5c0 .83.67 1.5 1.5 1.5H7zm-3-4h3V8H4v4zm8-4H8v4h4V8z" fill={primaryFill} /></svg>;
}

const PuzzleCubeRegular = wrapIcon(rawSvg({}), 'PuzzleCubeRegular');
export default PuzzleCubeRegular;
      