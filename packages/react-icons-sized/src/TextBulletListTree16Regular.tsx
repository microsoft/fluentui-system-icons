import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5a1 1 0 100-2 1 1 0 000 2zM2 9a1 1 0 100-2 1 1 0 000 2zm5 3.5a1 1 0 11-2 0 1 1 0 012 0zM5.5 3a.5.5 0 000 1h9a.5.5 0 000-1h-9zM5 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 8zm4.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const TextBulletListTree16Regular = wrapIcon(rawSvg({}), 'TextBulletListTree16Regular');
export default TextBulletListTree16Regular;
      