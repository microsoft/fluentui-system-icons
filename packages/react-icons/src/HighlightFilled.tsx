import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2C3.67 2 3 2.67 3 3.5v3C3 7.33 3.67 8 4.5 8h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /><path d="M6 11a2 2 0 01-2-2h12a2 2 0 01-2 2H6z" fill={primaryFill} /><path d="M6 12h8v1.07a2 2 0 01-1.1 1.8l-6.18 3.08A.5.5 0 016 17.5V12z" fill={primaryFill} /></svg>;
}

const HighlightFilled = wrapIcon(rawSvg({}), 'HighlightFilled');
export default HighlightFilled;
      