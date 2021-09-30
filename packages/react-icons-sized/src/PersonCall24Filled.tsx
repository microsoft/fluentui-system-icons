import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 14h11c.1.17.22.33.37.47l.72.69a4.23 4.23 0 01-1.1 1.9l-.8-.27a2.19 2.19 0 00-2.5.86l-.73 1.06c-.63.93-.52 2.19.27 2.98l.23.23c-.54.05-1.11.08-1.71.08-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 013 17.16v-.91C3 15.01 4.01 14 5.25 14zm11.76-1.76l.5-1.18c.24-.56.8-.86 1.36-.75l.12.04.63.2c.62.2 1.1.73 1.26 1.4.36 1.6-.08 3.55-1.33 5.84-1.24 2.29-2.6 3.67-4.1 4.13-.57.18-1.2.05-1.66-.34l-.12-.12-.48-.48a1.36 1.36 0 01-.22-1.59l.07-.11.72-1.06A1.2 1.2 0 0115 17.7l.12.04 1.34.44a5.08 5.08 0 001.92-3.11l.04-.27-1.1-1.05c-.37-.35-.5-.89-.36-1.37l.05-.14.5-1.18-.5 1.18zM11 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const PersonCall24Filled = wrapIcon(rawSvg({}), 'PersonCall24Filled');
export default PersonCall24Filled;
      