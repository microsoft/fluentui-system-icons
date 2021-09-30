import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.2 12.27a.75.75 0 01.03-1.06l5.25-5a.75.75 0 011.04 0l5.25 5a.75.75 0 11-1.04 1.08L10 7.8l-4.73 4.5a.75.75 0 01-1.06-.02z" fill={primaryFill} /></svg>;
}

const ChevronUpFilled = wrapIcon(rawSvg({}), 'ChevronUpFilled');
export default ChevronUpFilled;
      