import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 18.25a.75.75 0 001.5 0V5.75a.75.75 0 00-1.5 0v12.5z" fill={primaryFill} /><path d="M19.5 18.25a.75.75 0 001.5 0V5.75a.75.75 0 00-1.5 0v12.5z" fill={primaryFill} /><path d="M14.15 14.05a.75.75 0 001.13.98l2.37-2.37c.2-.12.35-.37.35-.66a.77.77 0 00-.35-.66l-2.37-2.37-.08-.07a.75.75 0 00-.98.07l-.07.08c-.22.3-.2.71.07.98l1.22 1.22H8.56l1.22-1.22.08-.1a.75.75 0 000-.88l-.08-.08-.1-.08a.75.75 0 00-.88 0l-.08.08-2.37 2.37-.07.05A.79.79 0 006 12c0 .29.14.54.35.66l2.37 2.37.08.07a.75.75 0 001.05-1.04l-.07-.09-1.22-1.22H15.44l-1.22 1.22-.07.08z" fill={primaryFill} /></svg>;
}

const AutoFitWidth24Regular = wrapIcon(rawSvg({}), 'AutoFitWidth24Regular');
export default AutoFitWidth24Regular;
      