import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 2.5A2.75 2.75 0 004 5.25v3.13c0 .4-.22.76-.57.94a.75.75 0 000 1.36c.35.18.57.54.57.94v3.13a2.75 2.75 0 002.75 2.75.75.75 0 000-1.5c-.69 0-1.25-.56-1.25-1.25v-3.13c0-.6-.21-1.17-.58-1.62.37-.45.58-1.02.58-1.62V5.25C5.5 4.56 6.06 4 6.75 4a.75.75 0 000-1.5zm6.5 0A2.75 2.75 0 0116 5.25v3.13c0 .4.22.76.57.94a.75.75 0 010 1.36c-.35.18-.57.54-.57.94v3.13a2.75 2.75 0 01-2.75 2.75.75.75 0 010-1.5c.69 0 1.25-.56 1.25-1.25v-3.13c0-.6.21-1.17.58-1.62a2.56 2.56 0 01-.58-1.62V5.25c0-.69-.56-1.25-1.25-1.25a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const BracesFilled = wrapIcon(rawSvg({}), 'BracesFilled');
export default BracesFilled;
      