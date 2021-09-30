import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2.5V6c0 .83-.68 1.5-1.5 1.5H5.49A1.5 1.5 0 014 6V2.5a.5.5 0 111 0V6c0 .28.21.5.49.5h9.01A.5.5 0 0015 6V2.5c0-.28.23-.5.5-.5s.5.22.5.5z" fill={primaryFill} /><path d="M3 9.5a.5.5 0 000 1h1.2a.5.5 0 000-1H3z" fill={primaryFill} /><path d="M6.2 9.5a.5.5 0 000 1h1.2a.5.5 0 000-1H6.2z" fill={primaryFill} /><path d="M8.9 10c0-.28.22-.5.5-.5h1.2a.5.5 0 010 1H9.4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M12.6 9.5a.5.5 0 000 1h1.2a.5.5 0 000-1h-1.2z" fill={primaryFill} /><path d="M15.3 10c0-.28.22-.5.5-.5H17a.5.5 0 010 1h-1.2a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M16 14v3.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5V14a.5.5 0 00-.5-.5H5.49a.5.5 0 00-.5.5v3.5a.5.5 0 01-.5.5.5.5 0 01-.49-.5V14c0-.83.67-1.5 1.49-1.5h9.01c.82 0 1.5.67 1.5 1.5z" fill={primaryFill} /></svg>;
}

const DocumentPageBreakRegular = wrapIcon(rawSvg({}), 'DocumentPageBreakRegular');
export default DocumentPageBreakRegular;
      