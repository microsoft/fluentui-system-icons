import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2.75a.75.75 0 00-.66.39l-2.75 5c-.15.27-.11.6.08.84l7.25 8.75a.75.75 0 001.16 0l7.25-8.75c.2-.24.23-.57.08-.84l-2.75-5a.75.75 0 00-.66-.39h-9zM4.16 7.5l1.78-3.25h1.5L6.31 7.5H4.16zM6.14 9l1.93 4.75L4.14 9h2zM10 14.48L7.76 9h4.39l-2.16 5.48zM7.89 7.5l1.14-3.25h1.95l1.2 3.25H7.88zm5.88 0l-1.2-3.25h1.49l1.78 3.25h-2.07zm0 1.5h2.1l-4.01 4.83L13.76 9z" fill={primaryFill} /></svg>;
}

const Premium20Filled = wrapIcon(rawSvg({}), 'Premium20Filled');
export default Premium20Filled;
      