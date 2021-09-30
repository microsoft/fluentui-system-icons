import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zM9.5 8h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 018 14.5v-5C8 8.67 8.67 8 9.5 8z" fill={primaryFill} /></svg>;
}

const RecordStop24Filled = wrapIcon(rawSvg({}), 'RecordStop24Filled');
export default RecordStop24Filled;
      