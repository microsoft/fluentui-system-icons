import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 10a.5.5 0 010 1h-7a.5.5 0 010-1h7z" fill={primaryFill} /><path d="M13.5 13h-7a.5.5 0 000 1h7a.5.5 0 000-1z" fill={primaryFill} /><path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zM5.5 16h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5z" fill={primaryFill} /></svg>;
}

const TextboxAlignBottom20Regular = wrapIcon(rawSvg({}), 'TextboxAlignBottom20Regular');
export default TextboxAlignBottom20Regular;
      