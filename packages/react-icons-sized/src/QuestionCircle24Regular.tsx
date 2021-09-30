import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.67a8.34 8.34 0 000 16.66 8.34 8.34 0 000-16.66zm0 11.83a1 1 0 110 2 1 1 0 010-2zm0-8.75a2.75 2.75 0 012.75 2.75c0 1.01-.3 1.57-1.05 2.36l-.17.17c-.62.62-.78.89-.78 1.47a.75.75 0 01-1.5 0c0-1.01.3-1.57 1.05-2.36l.17-.17c.62-.62.78-.89.78-1.47a1.25 1.25 0 00-2.5-.13v.13a.75.75 0 01-1.5 0A2.75 2.75 0 0112 6.75z" fill={primaryFill} /></svg>;
}

const QuestionCircle24Regular = wrapIcon(rawSvg({}), 'QuestionCircle24Regular');
export default QuestionCircle24Regular;
      