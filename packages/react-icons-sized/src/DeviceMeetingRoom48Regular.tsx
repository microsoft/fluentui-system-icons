import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 6a5.94 5.94 0 00-5.73 4.4L4.21 28.17A6.22 6.22 0 0010.22 36h27.56a6.22 6.22 0 006-7.83L39.04 10.4A5.94 5.94 0 0033.29 6H14.71zm-3.31 5.05A3.44 3.44 0 0114.7 8.5h18.58a3.44 3.44 0 013.32 2.55l4.76 17.77a3.72 3.72 0 01-3.6 4.68H10.23a3.72 3.72 0 01-3.59-4.68l4.76-17.77zM13.25 38a1.25 1.25 0 100 2.5h21.5a1.25 1.25 0 100-2.5h-21.5z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom48Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoom48Regular');
export default DeviceMeetingRoom48Regular;
      