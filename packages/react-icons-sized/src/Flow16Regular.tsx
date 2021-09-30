import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a2.5 2.5 0 01-4.95.5h-.32a1 1 0 00-.98.8l-.52 2.6A2 2 0 016.27 11h-.32a2.5 2.5 0 110-1h.32a1 1 0 00.98-.8l.52-2.6A2 2 0 019.73 5h.32a2.5 2.5 0 014.95.5zm-1 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM3.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const Flow16Regular = wrapIcon(rawSvg({}), 'Flow16Regular');
export default Flow16Regular;
      