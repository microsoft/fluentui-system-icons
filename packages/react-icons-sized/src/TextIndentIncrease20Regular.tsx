import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6 9.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6.5 14a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /><path d="M2.85 7.73a.5.5 0 10-.7.7L3.2 9.5l-1.06 1.06a.5.5 0 10.7.7l1.42-1.4a.5.5 0 000-.71L2.85 7.73z" fill={primaryFill} /></svg>;
}

const TextIndentIncrease20Regular = wrapIcon(rawSvg({}), 'TextIndentIncrease20Regular');
export default TextIndentIncrease20Regular;
      