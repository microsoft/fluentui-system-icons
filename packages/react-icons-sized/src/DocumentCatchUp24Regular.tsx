import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20.5a.5.5 0 00.5-.5V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v5.25a.75.75 0 01-1.5 0V4c0-1.1.9-2 2-2h6.17a.6.6 0 01.08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05a2.07 2.07 0 01.3.25l5.83 5.82A2 2 0 0120 9.83V20a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.75a.75.75 0 011.5 0V20c0 .27.22.5.5.5h12zm-.62-12L13.5 4.62V8c0 .28.22.5.5.5h3.38z" fill={primaryFill} /><path d="M2.75 13h2.5l1.56-3.55a.75.75 0 011.33-.1v.02l.05.1 2.42 6.03 1.42-2.1a.75.75 0 01.55-.4h2.11a.75.75 0 01.12 1.5H13.14l-1.98 3.1a.75.75 0 01-1.3.03l-.06-.1-2.33-5.84-1.04 2.36a.75.75 0 01-.56.44h-.01l-.11.01h-3a.75.75 0 01-.11-1.5h.11z" fill={primaryFill} /></svg>;
}

const DocumentCatchUp24Regular = wrapIcon(rawSvg({}), 'DocumentCatchUp24Regular');
export default DocumentCatchUp24Regular;
      