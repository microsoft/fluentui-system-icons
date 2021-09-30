import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a4 4 0 00-4 4 .5.5 0 001 0 3 3 0 016 0c0 1.25-.7 1.86-1.58 2.62l-.03.03c-.86.73-1.89 1.62-1.89 3.35v.5a.5.5 0 001 0V13c0-1.25.7-1.86 1.58-2.62l.03-.03C12.97 9.62 14 8.73 14 7a4 4 0 00-4-4z" fill={primaryFill} /><path d="M10 17a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const Question20Regular = wrapIcon(rawSvg({}), 'Question20Regular');
export default Question20Regular;
      