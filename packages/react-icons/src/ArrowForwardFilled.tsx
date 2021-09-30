import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.69 9.5l-2.96 2.96a.75.75 0 00.97 1.14l.09-.08 4.24-4.24a.75.75 0 00.07-.98l-.07-.08-4.24-4.24a.75.75 0 00-1.14.97l.08.09L15.69 8H10a7.75 7.75 0 00-7.75 7.5v.25a.75.75 0 001.5 0A6.25 6.25 0 019.77 9.5H15.7z" fill={primaryFill} /></svg>;
}

const ArrowForwardFilled = wrapIcon(rawSvg({}), 'ArrowForwardFilled');
export default ArrowForwardFilled;
      