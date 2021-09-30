import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.94 15.5A2 2 0 0013 14H3.85A2 2 0 002 16v1.73C2.17 21.04 5.79 22 8.5 22c.86 0 1.8-.1 2.7-.33L10.5 21c-.18-.18-.31-.39-.4-.62-.41.07-.85.11-1.3.13h-.63a7.63 7.63 0 01-3.26-.76c-.97-.52-1.42-1.23-1.42-2.24V16l.01-.1a.5.5 0 01.14-.26.5.5 0 01.25-.13l.1-.01h10.94z" fill={primaryFill} /><path d="M14.78 21.72a.75.75 0 01-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 111.06 1.06L13.56 19h6.88l-1.22-1.22a.75.75 0 111.06-1.06l2.5 2.5a.75.75 0 010 1.07l-2.5 2.5a.75.75 0 11-1.06-1.07l1.22-1.22h-6.88l1.22 1.22z" fill={primaryFill} /><path d="M22 17v.03l-1.01-1.01c-.2-.21-.45-.35-.71-.44a.5.5 0 00-.19-.07L20 15.5h-4.05c-.08-.5-.3-.96-.6-1.34l-.13-.16H20a2 2 0 012 1.85V17z" fill={primaryFill} /><path d="M13 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-7.5 0a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /><path d="M21 8.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /></svg>;
}

const PeopleSwap24Regular = wrapIcon(rawSvg({}), 'PeopleSwap24Regular');
export default PeopleSwap24Regular;
      