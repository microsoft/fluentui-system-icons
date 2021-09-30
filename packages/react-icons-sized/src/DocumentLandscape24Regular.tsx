import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5a.5.5 0 00-.5.5v12c0 .28.23.5.5.5h16a.5.5 0 00.5-.5v-6H16a2 2 0 01-2-2V5.5H4zm15.38 5L15.5 6.62V10c0 .28.22.5.5.5h3.38zm-3.8-5.91l5.83 5.82.07.09c.07.07.13.14.18.22l.07.13.12.21c.08.2.12.41.14.63l.01.14V18a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h10.17a2 2 0 011.42.59z" fill={primaryFill} /></svg>;
}

const DocumentLandscape24Regular = wrapIcon(rawSvg({}), 'DocumentLandscape24Regular');
export default DocumentLandscape24Regular;
      