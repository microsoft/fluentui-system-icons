import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.33 9.07A2.5 2.5 0 014.77 6h10.46a2.5 2.5 0 012.43 3.07l-.7 3A2.5 2.5 0 0114.53 14H5.47a2.5 2.5 0 01-2.44-1.93l-.7-3zM6 9.5a.5.5 0 100-1 .5.5 0 000 1zM8.5 9a.5.5 0 10-1 0 .5.5 0 001 0zM7 11.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zM10 9.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const SerialPortFilled = wrapIcon(rawSvg({}), 'SerialPortFilled');
export default SerialPortFilled;
      