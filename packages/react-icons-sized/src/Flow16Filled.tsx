import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a2.5 2.5 0 01-4.95.5h-.32a1 1 0 00-.98.8l-.52 2.6A2 2 0 016.27 11h-.32a2.5 2.5 0 110-1h.32a1 1 0 00.98-.8l.52-2.6A2 2 0 019.73 5h.32a2.5 2.5 0 014.95.5z" fill={primaryFill} /></svg>;
}

const Flow16Filled = wrapIcon(rawSvg({}), 'Flow16Filled');
export default Flow16Filled;
      