import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2c.28 0 .5.22.5.5V8c0 1.62 1.38 3 3 3s3-1.38 3-3V2.5a.5.5 0 011 0V8c0 2.18-1.82 4-4 4-2.18 0-4-1.82-4-4V2.5c0-.28.22-.5.5-.5zM4 13.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TextUnderline16Regular = wrapIcon(rawSvg({}), 'TextUnderline16Regular');
export default TextUnderline16Regular;
      