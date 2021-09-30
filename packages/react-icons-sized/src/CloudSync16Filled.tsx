import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.93 3.37A3.82 3.82 0 018 2c.85 0 1.84.28 2.63.93a3.68 3.68 0 011.3 2.26A5.5 5.5 0 005.1 11.5H4.5c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 8.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15zM6 10.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H11a.5.5 0 010-1h.47a1.98 1.98 0 00-1.72-.1 2 2 0 00-.66.44.5.5 0 01-.71-.71A3 3 0 0112 8.15V8c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 019 12.85V13a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H10a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const CloudSync16Filled = wrapIcon(rawSvg({}), 'CloudSync16Filled');
export default CloudSync16Filled;
      