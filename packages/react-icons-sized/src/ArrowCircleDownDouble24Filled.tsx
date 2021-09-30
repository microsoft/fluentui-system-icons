import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 13.75c.27.27.29.68.07.98l-.07.08-1.97 1.97a.75.75 0 01-.98.07l-.08-.07-1.97-1.97a.75.75 0 01.98-1.13l.08.07.69.7v-6.7c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65v.1l.01 6.69.69-.7a.75.75 0 01.98-.06l.08.07zM2 12a10 10 0 1020 0 10 10 0 00-20 0zm15.67 1.68l.08.07c.27.27.29.68.07.98l-.07.08-1.97 1.97a.75.75 0 01-.98.07l-.08-.07-1.97-1.97a.75.75 0 01.98-1.13l.08.07.69.69v-6.7c0-.37.28-.68.65-.73l.1-.01c.38 0 .7.28.74.65v6.79l.7-.7a.75.75 0 01.98-.06z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownDouble24Filled = wrapIcon(rawSvg({}), 'ArrowCircleDownDouble24Filled');
export default ArrowCircleDownDouble24Filled;
      