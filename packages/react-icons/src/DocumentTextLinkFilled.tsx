import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V13h2.5a.5.5 0 010-1h7a.5.5 0 010 1h-6c.95 0 1.82.38 2.45 1h3.55a.5.5 0 010 1h-2.84a3.49 3.49 0 010 3h3.84c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zM6.5 10h7a.5.5 0 010 1h-7a.5.5 0 010-1zM11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM3.5 14a2.5 2.5 0 000 5H4a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H4a.5.5 0 000-1h-.5zM7 14a.5.5 0 000 1h.5a1.5 1.5 0 010 3H7a.5.5 0 000 1h.5a2.5 2.5 0 000-5H7zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentTextLinkFilled = wrapIcon(rawSvg({}), 'DocumentTextLinkFilled');
export default DocumentTextLinkFilled;
      