import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 11.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0zm-2-3.99c-.3.3-.78.3-1.08 0a.76.76 0 010-1.08c.3-.3.78-.3 1.09 0 .3.3.3.78 0 1.08zm-8.82 4.5a2 2 0 010-2.83L6.3 1.6c.38-.37.89-.58 1.42-.59L10.97 1A2 2 0 0113 3.02l-.02 2.57c-.32-.16-.66-.3-1-.4V3.02a1 1 0 00-1-1.01l-3.27.01c-.26 0-.52.11-.7.3L2.25 7.04a1 1 0 000 1.41l2.8 2.79c.08.59.25 1.15.5 1.66a2 2 0 01-.7-.45l-3.32-3.3z" fill={primaryFill} /></svg>;
}

const TagDismiss16Regular = wrapIcon(rawSvg({}), 'TagDismiss16Regular');
export default TagDismiss16Regular;
      