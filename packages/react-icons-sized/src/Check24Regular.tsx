import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 5.78a.75.75 0 00-1.06-1.06l-7.5 7.5a.75.75 0 101.06 1.06l7.5-7.5zm.17 1.25c.03.17.05.34.05.52v6.9c0 1.4-1.14 2.55-2.55 2.55H4.55A2.55 2.55 0 012 14.45v-6.9C2 6.15 3.14 5 4.55 5h14.48l-1.5 1.5H4.55c-.58 0-1.05.47-1.05 1.05v6.9c0 .58.47 1.05 1.05 1.05h14.9c.58 0 1.05-.47 1.05-1.05V8.47l1.45-1.44zM4.5 9.25c0-.41.34-.75.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zm0 3.5c0-.41.34-.75.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Check24Regular = wrapIcon(rawSvg({}), 'Check24Regular');
export default Check24Regular;
      