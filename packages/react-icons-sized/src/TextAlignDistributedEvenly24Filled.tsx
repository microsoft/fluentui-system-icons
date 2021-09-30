import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm3.7 9.3a1 1 0 00-1.4 0l-2 2a1 1 0 000 1.4l2 2a1 1 0 001.4-1.4l-.29-.3H18.6l-.3.3a1 1 0 001.42 1.4l2-2a1 1 0 000-1.4l-2-2a1 1 0 00-1.42 1.4l.3.3H5.4l.3-.3a1 1 0 000-1.4zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z" fill={primaryFill} /></svg>;
}

const TextAlignDistributedEvenly24Filled = wrapIcon(rawSvg({}), 'TextAlignDistributedEvenly24Filled');
export default TextAlignDistributedEvenly24Filled;
      