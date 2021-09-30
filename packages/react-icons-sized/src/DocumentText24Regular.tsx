import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 11.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.75a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.75a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm4.84-14.41L19.4 8.4A2 2 0 0120 9.83V20a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2h6.17a.6.6 0 01.08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05a2.07 2.07 0 01.3.25zM18 20.5a.5.5 0 00.5-.5V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v16c0 .27.22.5.5.5h12zm-.62-12L13.5 4.62V8c0 .28.22.5.5.5h3.38z" fill={primaryFill} /></svg>;
}

const DocumentText24Regular = wrapIcon(rawSvg({}), 'DocumentText24Regular');
export default DocumentText24Regular;
      