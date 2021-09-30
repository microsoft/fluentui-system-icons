import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 18h12.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h12.6-12.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h15.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h15.6-15.5z" fill={primaryFill} /></svg>;
}

const List24Regular = wrapIcon(rawSvg({}), 'List24Regular');
export default List24Regular;
      