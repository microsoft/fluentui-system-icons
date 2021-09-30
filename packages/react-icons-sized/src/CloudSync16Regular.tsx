import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 4c-.48.6-.7 1.35-.7 2a.5.5 0 01-.5.5C2.69 6.5 2 7.76 2 8.5c0 .43.1.92.44 1.3.32.36.91.7 2.06.7H5c0 .34.03.68.1 1h-.6c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 8.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15A3.82 3.82 0 018 2c.85 0 1.84.28 2.63.93a3.68 3.68 0 011.3 2.26c-.34-.1-.7-.15-1.07-.18-.17-.57-.48-1-.86-1.31A3.23 3.23 0 008 3c-1.1 0-1.83.43-2.3 1zm.3 6.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H11a.5.5 0 010-1h.47a1.98 1.98 0 00-1.72-.1 2 2 0 00-.66.44.5.5 0 01-.71-.71A3 3 0 0112 8.15V8c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 019 12.85V13a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H10a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const CloudSync16Regular = wrapIcon(rawSvg({}), 'CloudSync16Regular');
export default CloudSync16Regular;
      