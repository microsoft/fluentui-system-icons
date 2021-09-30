import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 13.25C4 10.35 6.35 8 9.25 8h29.5c2.9 0 5.25 2.35 5.25 5.25v21.5c0 2.9-2.35 5.25-5.25 5.25H9.25A5.25 5.25 0 014 34.75v-21.5z" fill={primaryFill} /></svg>;
}

const RectangleLandscape48Filled = wrapIcon(rawSvg({}), 'RectangleLandscape48Filled');
export default RectangleLandscape48Filled;
      