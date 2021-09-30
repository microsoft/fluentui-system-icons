import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-1V4.5a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H5.5a.5.5 0 00-.5.5V10H4V4.5C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM15 13h1v3.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5V13h1v3.5c0 .28.22.5.5.5h9a.5.5 0 00.5-.5V13zM8.98 6.85a.5.5 0 00-.94-.05L6.18 11H2.5a.5.5 0 000 1h4a.5.5 0 00.46-.3L8.4 8.42l1.61 5.23a.5.5 0 00.93.07l1.55-3.1.55 1.1a.5.5 0 00.45.28h4a.5.5 0 000-1h-3.7l-.85-1.72a.5.5 0 00-.9 0l-1.44 2.88-1.63-5.3z" fill={primaryFill} /></svg>;
}

const ClipboardPulseRegular = wrapIcon(rawSvg({}), 'ClipboardPulseRegular');
export default ClipboardPulseRegular;
      