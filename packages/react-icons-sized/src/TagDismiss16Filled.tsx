import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.3 1.6L1.52 6.33a2 2 0 000 2.83l3.31 3.28c.21.2.45.36.7.46a5.5 5.5 0 017.43-7.31L13 3A2 2 0 0010.97 1l-3.26.01c-.53 0-1.04.22-1.42.59zm4.05 3.06c-.3.3-.79.3-1.09 0a.76.76 0 010-1.08c.3-.3.8-.3 1.1 0 .3.3.3.78 0 1.08zM10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 11.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const TagDismiss16Filled = wrapIcon(rawSvg({}), 'TagDismiss16Filled');
export default TagDismiss16Filled;
      