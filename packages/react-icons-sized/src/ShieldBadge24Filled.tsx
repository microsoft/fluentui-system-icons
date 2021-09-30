import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A2.75 2.75 0 014.75 5h12.5A2.75 2.75 0 0120 7.75v2.47a3.96 3.96 0 01-1.4-1.04 3.33 3.33 0 01-.17-.2 1.75 1.75 0 00-2.88.03l-.14.17c-.14.15-.34.35-.6.56-.54.41-1.24.75-2.06.75-.97 0-1.75.8-1.75 1.76V15H4.75A2.75 2.75 0 012 12.25v-4.5zm13.57 1.23zm3.01 1.55c-.35-.27-.7-.6-.97-.96a.75.75 0 00-1.22 0 4.98 4.98 0 01-3.64 1.93.75.75 0 00-.75.75V15c0 1.64.44 2.95 1.3 3.98a7.98 7.98 0 003.44 2.22c.17.07.35.07.52 0 1.4-.52 2.6-1.2 3.44-2.22A5.97 5.97 0 0022 15v-2.75a.75.75 0 00-.75-.75c-.58 0-1.1-.13-1.56-.32-.42-.17-.8-.4-1.1-.65z" fill={primaryFill} /></svg>;
}

const ShieldBadge24Filled = wrapIcon(rawSvg({}), 'ShieldBadge24Filled');
export default ShieldBadge24Filled;
      