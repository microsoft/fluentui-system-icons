import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 13.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6.5-.5a.5.5 0 000 1h1a.5.5 0 000-1h-1zM4 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm5.5 1H4a1 1 0 00-1 1v8a1 1 0 001 1h5.5V5zm1 10H16a1 1 0 001-1V6a1 1 0 00-1-1h-5.5v10z" fill={primaryFill} /></svg>;
}

const DualScreen20Regular = wrapIcon(rawSvg({}), 'DualScreen20Regular');
export default DualScreen20Regular;
      