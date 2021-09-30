import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 5h14.5A2.75 2.75 0 0122 7.75v8.5A2.75 2.75 0 0119.25 19H4.75A2.75 2.75 0 012 16.25v-8.5A2.75 2.75 0 014.75 5zm0 1.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H4.75z" fill={primaryFill} /></svg>;
}

const System24Regular = wrapIcon(rawSvg({}), 'System24Regular');
export default System24Regular;
      