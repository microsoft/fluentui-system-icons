import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-1.57l-.59-1.17a1.5 1.5 0 00-2.68 0l-.33.65-.9-2.92a1.5 1.5 0 00-2.8-.17L5.53 10H4V4.5C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm5 10H16v3.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5V13h2.5c.6 0 1.13-.35 1.37-.9l.37-.83.83 2.67a1.5 1.5 0 002.77.23l.74-1.48c.26.2.58.31.92.31zM8.98 6.85a.5.5 0 00-.94-.05L6.18 11H2.5a.5.5 0 000 1h4a.5.5 0 00.46-.3L8.4 8.42l1.61 5.23a.5.5 0 00.93.07l1.55-3.1.55 1.1a.5.5 0 00.45.28h4a.5.5 0 000-1h-3.7l-.85-1.72a.5.5 0 00-.9 0l-1.44 2.88-1.63-5.3z" fill={primaryFill} /></svg>;
}

const ClipboardPulseFilled = wrapIcon(rawSvg({}), 'ClipboardPulseFilled');
export default ClipboardPulseFilled;
      