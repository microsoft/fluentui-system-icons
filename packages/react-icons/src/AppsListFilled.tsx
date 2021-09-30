import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M8 10.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M8 16.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2 15.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 012 16.5v-1z" fill={primaryFill} /><path d="M2 9.5C2 8.67 2.67 8 3.5 8h1C5.33 8 6 8.67 6 9.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 012 10.5v-1z" fill={primaryFill} /><path d="M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v1C6 5.33 5.33 6 4.5 6h-1A1.5 1.5 0 012 4.5v-1z" fill={primaryFill} /></svg>;
}

const AppsListFilled = wrapIcon(rawSvg({}), 'AppsListFilled');
export default AppsListFilled;
      