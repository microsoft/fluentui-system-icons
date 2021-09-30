import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 4a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3 8.25c0-.41.34-.75.75-.75h4.68A5 5 0 007.42 9H3.75A.75.75 0 013 8.25z" fill={primaryFill} /><path d="M15.46 9a4.02 4.02 0 00-5.4-1.5A4.02 4.02 0 008 11v4.75a.75.75 0 101.5 0V11a2.5 2.5 0 115 0v4.75a.75.75 0 00.75.75.75.75 0 00.75-.75V11c0-.73-.2-1.41-.54-2z" fill={primaryFill} /><path d="M3.75 11H7v1.5H3.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M3.75 14.5H7v1.25c0 .08 0 .17.02.25H3.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M20.25 16h-3.27l.02-.25V14.5h3.25a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M20.25 12.5H17V11h3.25a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M20.25 9h-3.67a5 5 0 00-1-1.5h4.67a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M3.75 18a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
}

const TextPositionTight24Regular = wrapIcon(rawSvg({}), 'TextPositionTight24Regular');
export default TextPositionTight24Regular;
      