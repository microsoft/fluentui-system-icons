import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2.5c.21 0 .4.13.47.33l3.5 9.5a.5.5 0 01-.94.34L6.55 10h-4.1l-.98 2.67a.5.5 0 01-.94-.34l3.5-9.5a.5.5 0 01.47-.33zm0 1.95L2.82 9h3.36L4.5 4.45zm5-1.95A.5.5 0 009 3v9.5c0 .28.22.5.5.5H12a3 3 0 001.16-5.77 2.74 2.74 0 00-1.91-4.73H9.5zM13 5.25C13 6.22 12.22 7 11.25 7H10V3.5h1.25c.97 0 1.75.78 1.75 1.75zM12 12h-2V8h2a2 2 0 110 4z" fill={primaryFill} /></svg>;
}

const TextCaseUppercase16Regular = wrapIcon(rawSvg({}), 'TextCaseUppercase16Regular');
export default TextCaseUppercase16Regular;
      