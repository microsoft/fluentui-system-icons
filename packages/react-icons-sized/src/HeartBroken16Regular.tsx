import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.95 3.94a3.25 3.25 0 014.6 0l.44.46.45-.45a3.25 3.25 0 014.62 4.6l-4.69 4.69a.5.5 0 01-.7 0l-4.71-4.7a3.25 3.25 0 01-.01-4.6zm5.07 8.24l4.33-4.33c.87-.88.87-2.3-.01-3.18a2.25 2.25 0 00-3.2-.01l-.24.25a.5.5 0 01-.05.05L7.71 6.11l1.64 1.65c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7L8.29 8.1 6.65 6.46a.5.5 0 010-.7l.64-.65-.46-.46a2.25 2.25 0 00-3.18 0c-.87.87-.87 2.3.01 3.17l4.36 4.36z" fill={primaryFill} /></svg>;
}

const HeartBroken16Regular = wrapIcon(rawSvg({}), 'HeartBroken16Regular');
export default HeartBroken16Regular;
      