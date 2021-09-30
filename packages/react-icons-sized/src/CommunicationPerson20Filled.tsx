import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.5a6.5 6.5 0 00-4.6 11.1.75.75 0 11-1.06 1.05A8 8 0 1118 11a3 3 0 00-2.17-2.88A6.5 6.5 0 0010 4.5zm2.83 4.43a3 3 0 011.27-.8 5 5 0 10-7.64 6.4.75.75 0 001.06-1.06 3.5 3.5 0 115.3-4.54zM10 9a2 2 0 110 4 2 2 0 010-4zm3 2a2 2 0 114 0 2 2 0 01-4 0zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 0111 15.5c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
}

const CommunicationPerson20Filled = wrapIcon(rawSvg({}), 'CommunicationPerson20Filled');
export default CommunicationPerson20Filled;
      