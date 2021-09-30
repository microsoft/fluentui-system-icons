import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 7A5.75 5.75 0 0117.4 7h.09a4 4 0 013.88 3h-4.13c-.97 0-1.75.78-1.75 1.75v.83a3.04 3.04 0 00-2.2 2l-.14.42H6a4 4 0 010-8h.09zm10.41 4.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 01-.75-.75V15h-.32a.54.54 0 00-.51.37l-.92 2.74a2.04 2.04 0 01-1.93 1.39H12v1.75c0 .41-.34.75-.75.75h-4a.75.75 0 01-.75-.75v-4c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75V18h.82c.23 0 .44-.15.51-.37l.92-2.74a2.04 2.04 0 011.93-1.39h.32v-1.75zm1.5 2.52V15h2.5v-2.5H18v1.73a1.06 1.06 0 010 .04zM8 18v2.5h2.5V18H8z" fill={primaryFill} /></svg>;
}

const CloudFlow24Filled = wrapIcon(rawSvg({}), 'CloudFlow24Filled');
export default CloudFlow24Filled;
      