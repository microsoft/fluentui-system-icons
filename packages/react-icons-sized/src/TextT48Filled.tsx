import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9.5c0-.83.67-1.5 1.5-1.5h25c.83 0 1.5.67 1.5 1.5v4a1.5 1.5 0 01-3 0V11h-9.5v26h3a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3h3V11H13v2.5a1.5 1.5 0 01-3 0v-4z" fill={primaryFill} /></svg>;
}

const TextT48Filled = wrapIcon(rawSvg({}), 'TextT48Filled');
export default TextT48Filled;
      