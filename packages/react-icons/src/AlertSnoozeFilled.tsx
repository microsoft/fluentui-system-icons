import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c.89 0 1.74.19 2.5.52A1.5 1.5 0 0014 4h.63l-1.3 1.83A1.47 1.47 0 0012 5H9.45l-.18.02h-.04a1.5 1.5 0 00-.33 2.86l-.58.69-.1.13-.01.04A1.5 1.5 0 009.5 11h2.54l.18-.02h.05a1.5 1.5 0 001.09-2.12c.19.09.4.14.64.14h2v2.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 01-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0110 2z" fill={primaryFill} /><path d="M12.45 16a2.5 2.5 0 01-4.9 0h4.9z" fill={primaryFill} /><path d="M14 2h3.5c.37 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 01.09 1h-3.6a.5.5 0 01-.44-.71l.04-.08L16.54 3H14a.5.5 0 01-.1-1h.1z" fill={primaryFill} /><path d="M9.5 6H12c.4 0 .62.43.43.75l-.05.07L10.57 9H12a.5.5 0 01.09 1h-2.6a.5.5 0 01-.42-.75l.04-.07L10.93 7H9.5a.5.5 0 01-.1-1h.1z" fill={primaryFill} /></svg>;
}

const AlertSnoozeFilled = wrapIcon(rawSvg({}), 'AlertSnoozeFilled');
export default AlertSnoozeFilled;
      