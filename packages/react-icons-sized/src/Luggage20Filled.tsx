import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2a.5.5 0 000 1H7v1h-.5A2.5 2.5 0 004 6.5l-.03 8A2.5 2.5 0 006 16.95v.54a.5.5 0 001 0V17h6v.5a.5.5 0 001 0v-.55a2.5 2.5 0 002-2.44l.03-8A2.5 2.5 0 0013.53 4H13V3h.5a.5.5 0 100-1h-7zM8 4V3h4v1H8zM6.5 8.5c0-.28.22-.5.5-.5h6a.5.5 0 110 1H7a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const Luggage20Filled = wrapIcon(rawSvg({}), 'Luggage20Filled');
export default Luggage20Filled;
      