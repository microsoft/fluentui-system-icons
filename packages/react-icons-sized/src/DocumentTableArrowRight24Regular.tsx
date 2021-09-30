import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20.5a.5.5 0 00.5-.5V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v7.08c-.52.08-1.03.22-1.5.42V4c0-1.1.9-2 2-2h6.17a.6.6 0 01.08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05a2.07 2.07 0 01.3.25l5.83 5.82A2 2 0 0120 9.83V20a2 2 0 01-2 2h-6.81c.43-.44.8-.95 1.08-1.5H18zm-.62-12L13.5 4.62V8c0 .28.22.5.5.5h3.38zm-4.38 9c0 .52-.06 1.02-.17 1.5h2.42c.97 0 1.75-.78 1.75-1.75v-4c0-.97-.78-1.75-1.75-1.75H9c.98.4 1.83 1.05 2.5 1.85V13h3.75c.14 0 .25.11.25.25v1.25h-3.23c.24.47.43.97.56 1.5h2.67v1.25c0 .14-.11.25-.25.25H13zm-1 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM3.5 17a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L8.29 17H3.5z" fill={primaryFill} /></svg>;
}

const DocumentTableArrowRight24Regular = wrapIcon(rawSvg({}), 'DocumentTableArrowRight24Regular');
export default DocumentTableArrowRight24Regular;
      