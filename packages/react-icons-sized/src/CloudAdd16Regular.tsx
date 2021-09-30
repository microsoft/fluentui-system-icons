import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6c0-.65.22-1.4.7-2 .47-.57 1.2-1 2.3-1 .65 0 1.4.22 2 .7.38.31.7.74.86 1.31.37.03.73.09 1.07.18a3.68 3.68 0 00-1.3-2.26A4.23 4.23 0 008 2c-1.4 0-2.42.57-3.07 1.37a4.2 4.2 0 00-.9 2.15C1.97 5.73 1 7.32 1 8.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h.6c-.07-.32-.1-.66-.1-1h-.5c-1.15 0-1.74-.34-2.06-.7A1.96 1.96 0 012 8.5c0-.74.69-2 2.5-2A.5.5 0 005 6zm5.5 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 010 1H11v1.5a.5.5 0 01-1 0V11H8.5a.5.5 0 010-1H10V8.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CloudAdd16Regular = wrapIcon(rawSvg({}), 'CloudAdd16Regular');
export default CloudAdd16Regular;
      