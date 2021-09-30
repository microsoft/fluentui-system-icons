import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.35 3.15a.5.5 0 10-.7.7L3.79 5 2.65 6.15a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5z" fill={primaryFill} /><path d="M7.5 4a.5.5 0 000 1h10a.5.5 0 000-1h-10z" fill={primaryFill} /><path d="M2.5 14a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M2 9.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TextFirstLine20Regular = wrapIcon(rawSvg({}), 'TextFirstLine20Regular');
export default TextFirstLine20Regular;
      