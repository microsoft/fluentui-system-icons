import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.78 5.28l.72-.72v16.69a.75.75 0 001.5 0V4.56l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 001.06 1.06zM6 19.44l.72-.72a.75.75 0 011.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72V2.75a.75.75 0 011.5 0v16.69zm6.5-16.69a.75.75 0 00-1.5 0v18.5a.75.75 0 001.5 0V2.75z" fill={primaryFill} /></svg>;
}

const TextAlignDistributedVertical24Regular = wrapIcon(rawSvg({}), 'TextAlignDistributedVertical24Regular');
export default TextAlignDistributedVertical24Regular;
      