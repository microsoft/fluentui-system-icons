import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.98 9.59L17 9a8 8 0 10-7.41 7.98A5.48 5.48 0 0112.2 9.5H5.5a.5.5 0 010-1h7a.5.5 0 01.45.72 5.5 5.5 0 014.03.37zM10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 010 .7L16.1 16.1a.5.5 0 01-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 01-1 0v-.25a2.75 2.75 0 012.75-2.75h1.54l-.9-.9a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const CircleSubtractArrowForwardFilled = wrapIcon(rawSvg({}), 'CircleSubtractArrowForwardFilled');
export default CircleSubtractArrowForwardFilled;
      