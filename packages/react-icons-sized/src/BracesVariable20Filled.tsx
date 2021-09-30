import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 2.5A2.75 2.75 0 003 5.25v3.13c0 .4-.22.76-.57.94a.75.75 0 000 1.36c.35.18.57.54.57.94v3.13a2.75 2.75 0 002.75 2.75.75.75 0 000-1.5c-.69 0-1.25-.56-1.25-1.25v-3.13c0-.6-.21-1.17-.58-1.62.37-.45.58-1.02.58-1.62V5.25C4.5 4.56 5.06 4 5.75 4a.75.75 0 000-1.5zm8.5 0A2.75 2.75 0 0117 5.25v3.13c0 .4.22.76.57.94a.75.75 0 010 1.36c-.35.18-.57.54-.57.94v3.13a2.75 2.75 0 01-2.75 2.75.75.75 0 010-1.5c.69 0 1.25-.56 1.25-1.25v-3.13c0-.6.21-1.17.58-1.62a2.56 2.56 0 01-.58-1.62V5.25c0-.69-.56-1.25-1.25-1.25a.75.75 0 010-1.5zM8.11 6.06a.75.75 0 10-1.22.88L9.08 10l-2.19 3.06a.75.75 0 001.22.88L10 11.29l1.89 2.65a.75.75 0 001.22-.88L10.92 10l2.19-3.06a.75.75 0 00-1.22-.88L10 8.71 8.11 6.06z" fill={primaryFill} /></svg>;
}

const BracesVariable20Filled = wrapIcon(rawSvg({}), 'BracesVariable20Filled');
export default BracesVariable20Filled;
      