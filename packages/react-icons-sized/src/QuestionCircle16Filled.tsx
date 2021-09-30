import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 8.5A.75.75 0 108 12a.75.75 0 000-1.5zm0-6a2 2 0 00-2 2 .5.5 0 001 0 1 1 0 012 0c0 .37-.08.58-.37.9l-.11.12-.27.27c-.54.57-.75.98-.75 1.71a.5.5 0 001 0c0-.37.08-.58.37-.9l.11-.12.27-.27c.54-.57.75-.98.75-1.71a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
}

const QuestionCircle16Filled = wrapIcon(rawSvg({}), 'QuestionCircle16Filled');
export default QuestionCircle16Filled;
      