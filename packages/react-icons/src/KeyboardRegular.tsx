import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 12.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M11.5 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M15.25 7.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M5.5 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M7.75 9.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M10 10.5A.75.75 0 1010 9a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M13.76 9.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M8.5 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 13.5v-8zM3.5 5a.5.5 0 00-.5.5v8c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-13z" fill={primaryFill} /></svg>;
}

const KeyboardRegular = wrapIcon(rawSvg({}), 'KeyboardRegular');
export default KeyboardRegular;
      