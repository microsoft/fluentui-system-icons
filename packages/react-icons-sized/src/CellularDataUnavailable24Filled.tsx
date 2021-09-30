import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 9a1 1 0 011 1v1.05c-.7.14-1.36.59-1.74 1.33l-.26.53V10a1 1 0 011-1zm3-2v4.5c.3.21.55.51.74.88L21 14.91V7a1 1 0 00-2 0zm-7.73 13.38L13 16.91V13a1 1 0 10-2 0v7a1 1 0 00.18.57l.09-.19zM8 15a1 1 0 011 1v4a1 1 0 01-1 1 1 1 0 01-1-1v-4a1 1 0 011-1zm-4 3a1 1 0 011 .98v1.04A1 1 0 014 21a1 1 0 01-1-.98v-1.04A1 1 0 014 18zm12.16-5.17l-4 8A1.5 1.5 0 0013.5 23h8a1.5 1.5 0 001.34-2.17l-4-8a1.5 1.5 0 00-2.68 0zM18 15.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const CellularDataUnavailable24Filled = wrapIcon(rawSvg({}), 'CellularDataUnavailable24Filled');
export default CellularDataUnavailable24Filled;
      