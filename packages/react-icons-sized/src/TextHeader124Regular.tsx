import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.59 5.08a.75.75 0 00-.8.08c-.13.1-.21.23-.26.37a7.63 7.63 0 01-3.17 4.08.75.75 0 00.78 1.28 8.66 8.66 0 002.36-2.14v9.5a.75.75 0 001.5 0V5.77a.75.75 0 00-.41-.69zM3.5 5.75a.75.75 0 00-1.5 0v12.5a.75.75 0 001.5 0V12.5H10v5.75a.75.75 0 001.5 0V5.75a.75.75 0 00-1.5 0V11H3.5V5.75z" fill={primaryFill} /></svg>;
}

const TextHeader124Regular = wrapIcon(rawSvg({}), 'TextHeader124Regular');
export default TextHeader124Regular;
      