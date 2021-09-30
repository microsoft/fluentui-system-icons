import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.85 2.15c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 11.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0zM14.5 4h-8a.5.5 0 010-1h8a.5.5 0 010 1zM6 8c0-.28.22-.5.5-.5h8a.5.5 0 010 1h-8A.5.5 0 016 8zm-1.15 3.15c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0zM14.5 13h-8a.5.5 0 010-1h8a.5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const Multiselect16Regular = wrapIcon(rawSvg({}), 'Multiselect16Regular');
export default Multiselect16Regular;
      