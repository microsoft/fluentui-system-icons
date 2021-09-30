import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A3.75 3.75 0 015.75 4h12.5A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5zM8.25 7a.75.75 0 00-.75.75v1.5a.75.75 0 101.5 0V8.5h2.25v7h-.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-.5v-7H15v.75a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75h-7.5z" fill={primaryFill} /></svg>;
}

const TextField24Filled = wrapIcon(rawSvg({}), 'TextField24Filled');
export default TextField24Filled;
      