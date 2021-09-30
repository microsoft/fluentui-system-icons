import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.95 12.97l-3.76-9.5a.75.75 0 00-1.34-.1l-.05.1-3.75 9.5a.75.75 0 001.35.65l.05-.1 1-2.52h4.1l1 2.52c.14.35.52.54.88.45l.1-.03a.75.75 0 00.45-.87l-.03-.1zM16.5 5.79l1.46 3.71h-2.92l1.46-3.7zM12 7.75c0 .41-.34.75-.75.75H5.56l.72.72a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 011.06 1.06L5.56 7h5.69c.41 0 .75.34.75.75zm9 9.5c0 .41-.34.75-.75.75H5.56l.72.72a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 011.06 1.06l-.72.72h14.69c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
}

const TextDirectionHorizontalRtl24Regular = wrapIcon(rawSvg({}), 'TextDirectionHorizontalRtl24Regular');
export default TextDirectionHorizontalRtl24Regular;
      