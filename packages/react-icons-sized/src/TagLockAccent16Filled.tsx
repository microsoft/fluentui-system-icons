import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.65 1.95L1.89 6.68a1.5 1.5 0 000 2.12l3.3 3.29c.5.48 1.23.57 1.81.25V10a2 2 0 011.5-1.94V8a3 3 0 013.98-2.84l.02-2.15a1.5 1.5 0 00-1.52-1.51l-3.27.01c-.4 0-.78.16-1.06.44z" fill={primaryFill} /></svg>;
}

const TagLockAccent16Filled = wrapIcon(rawSvg({}), 'TagLockAccent16Filled');
export default TagLockAccent16Filled;
      