import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 6.5a1.25 1.25 0 100 2.5h37.5a1.25 1.25 0 100-2.5H5.25zM26 15.75c0-2.35 1.9-4.25 4.25-4.25h5.5c2.35 0 4.25 1.9 4.25 4.25v15C40 33.1 38.1 35 35.75 35h-5.5A4.25 4.25 0 0126 30.75v-15zM12.25 11.5h5.5c2.35 0 4.25 1.9 4.25 4.25V38c0 2.35-1.9 4.25-4.25 4.25h-5.5A4.25 4.25 0 018 38V15.75c0-2.35 1.9-4.25 4.25-4.25z" fill={primaryFill} /></svg>;
}

const AlignTop48Filled = wrapIcon(rawSvg({}), 'AlignTop48Filled');
export default AlignTop48Filled;
      