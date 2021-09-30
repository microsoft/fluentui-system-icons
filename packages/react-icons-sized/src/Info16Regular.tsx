import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z" fill={primaryFill} /></svg>;
}

const Info16Regular = wrapIcon(rawSvg({}), 'Info16Regular');
export default Info16Regular;
      