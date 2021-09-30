import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.75A.75.75 0 002 4.5v1.31a.75.75 0 001.5 0V4.5a.75.75 0 00-.75-.75zm0 3.94a.75.75 0 00-.75.75v2.62a.75.75 0 001.5 0V8.44a.75.75 0 00-.75-.75zm0 5.25a.75.75 0 00-.75.75V15a.75.75 0 001.5 0v-1.31a.75.75 0 00-.75-.75zm14.5-9.19a.75.75 0 00-.75.75V15a.75.75 0 001.5 0V4.5a.75.75 0 00-.75-.75zM4.72 10.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 111.06 1.06L7.06 9h7.19a.75.75 0 010 1.5H7.06l2.97 2.97a.75.75 0 11-1.06 1.06l-4.25-4.25z" fill={primaryFill} /></svg>;
}

const PaddingLeft20Filled = wrapIcon(rawSvg({}), 'PaddingLeft20Filled');
export default PaddingLeft20Filled;
      