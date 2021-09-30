import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4.5a.75.75 0 00-.75.75v.87a.75.75 0 001.5 0v-.87a.75.75 0 00-.75-.75zm0 3.47a.75.75 0 00-.75.75v1.73a.75.75 0 001.5 0V8.72a.75.75 0 00-.75-.75zm0 4.33a.75.75 0 00-.75.75v1.73a.75.75 0 001.5 0v-1.73a.75.75 0 00-.75-.75zm0 4.33a.75.75 0 00-.75.75v.87a.75.75 0 001.5 0v-.87a.75.75 0 00-.75-.75zM21.25 4.5a.75.75 0 00-.75.75v13a.75.75 0 001.5 0v-13a.75.75 0 00-.75-.75zM5.22 12.28a.75.75 0 010-1.06l5-5a.75.75 0 111.06 1.06L7.56 11h10.69a.75.75 0 010 1.5H7.56l3.72 3.72a.75.75 0 11-1.06 1.06l-5-5z" fill={primaryFill} /></svg>;
}

const PaddingLeft24Regular = wrapIcon(rawSvg({}), 'PaddingLeft24Regular');
export default PaddingLeft24Regular;
      