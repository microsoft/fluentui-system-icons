import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2.75c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75V3h1.25c.41 0 .75.34.75.75v1.78h.03a8.25 8.25 0 013.96 14.97h3.26a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h8.53A6.75 6.75 0 0013 7.04v5.21c0 .41-.34.75-.75.75h-.75v1a2 2 0 11-4 0v-1h-.75a.75.75 0 01-.75-.75v-8.5c0-.41.34-.75.75-.75H8v-.25zM9 13v1a.5.5 0 001 0v-1H9zm-1.5-1.5h4v-7h-4v7zm-1.75 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /></svg>;
}

const Microscope24Regular = wrapIcon(rawSvg({}), 'Microscope24Regular');
export default Microscope24Regular;
      