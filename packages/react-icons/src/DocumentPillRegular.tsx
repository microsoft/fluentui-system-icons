import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h3.2a3.61 3.61 0 01-.29-1H6a1 1 0 01-1-1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.2c.32-.14.66-.24 1-.29v-1.5c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zm3.55 3.65a2.62 2.62 0 00-3.7 0l-4 4a2.62 2.62 0 003.7 3.7l4-4a2.62 2.62 0 000-3.7zm-3 .7a1.62 1.62 0 112.3 2.3L16 15.29 13.7 13l1.65-1.65zm-2.2 4.3a.5.5 0 01.7.7l-1 1a.5.5 0 01-.7-.7l1-1z" fill={primaryFill} /></svg>;
}

const DocumentPillRegular = wrapIcon(rawSvg({}), 'DocumentPillRegular');
export default DocumentPillRegular;
      