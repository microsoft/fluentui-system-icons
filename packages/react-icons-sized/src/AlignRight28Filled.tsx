import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 2.75a.75.75 0 00-1.5 0v22.5a.75.75 0 001.5 0V2.75zM19.25 5A2.75 2.75 0 0122 7.75v2.5A2.75 2.75 0 0119.25 13H5.75A2.75 2.75 0 013 10.25v-2.5A2.75 2.75 0 015.75 5h13.5zm0 10A2.75 2.75 0 0122 17.75v2.5A2.75 2.75 0 0119.25 23h-8a2.75 2.75 0 01-2.75-2.75v-2.5A2.75 2.75 0 0111.25 15h8z" fill={primaryFill} /></svg>;
}

const AlignRight28Filled = wrapIcon(rawSvg({}), 'AlignRight28Filled');
export default AlignRight28Filled;
      