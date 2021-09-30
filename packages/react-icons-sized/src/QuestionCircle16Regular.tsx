import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zm0 7.5A.75.75 0 118 12a.75.75 0 010-1.5zm0-6a2 2 0 012 2c0 .73-.21 1.14-.75 1.7l-.27.28c-.38.4-.48.6-.48 1.02a.5.5 0 01-1 0c0-.73.21-1.14.75-1.7l.27-.28c.38-.4.48-.6.48-1.02a1 1 0 00-2 0 .5.5 0 01-1 0c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
}

const QuestionCircle16Regular = wrapIcon(rawSvg({}), 'QuestionCircle16Regular');
export default QuestionCircle16Regular;
      