import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 9.25h10.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h10.6-10.5zm0-4h10.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h10.6-10.5z" fill={primaryFill} /></svg>;
}

const ReOrder16Filled = wrapIcon(rawSvg({}), 'ReOrder16Filled');
export default ReOrder16Filled;
      