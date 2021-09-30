import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 2v3a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V2h11zm-8 6.5h5v1.87a2 2 0 01-.97 1.71L5.5 14.5v-6z" fill={primaryFill} /></svg>;
}

const HighlightAccent16Filled = wrapIcon(rawSvg({}), 'HighlightAccent16Filled');
export default HighlightAccent16Filled;
      