import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.33 1.5c0-.28.23-.5.5-.5h4.34a.5.5 0 010 1H10v1h1a2 2 0 012 2v7a2 2 0 01-2 2v.5a.5.5 0 11-1 0V14H6v.5a.5.5 0 11-1 0V14a2 2 0 01-2-2V5c0-1.1.9-2 2-2h1V2h-.17a.5.5 0 01-.5-.5zM7 2v1h2V2H7zM5 4a1 1 0 00-1 1v7a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H5zm0 2.5c0-.28.22-.5.5-.5h5a.5.5 0 110 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const Luggage16Regular = wrapIcon(rawSvg({}), 'Luggage16Regular');
export default Luggage16Regular;
      