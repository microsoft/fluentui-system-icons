import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.94 7.06c.2.2.44.33.69.4-.11.24-.19.5-.22.75L7 8.43 1 5.2V5c0-1.1.9-2 2-2h5.88L6.94 4.94a1.5 1.5 0 000 2.12zM7.5 9.3a2.56 2.56 0 004.26 1.06L13 9.12V11a2 2 0 01-2 2H3a2 2 0 01-2-2V6.34l5.76 3.1a.5.5 0 00.48 0l.26-.14zm3.73-5.82L8.35 6.35a.5.5 0 11-.7-.7l2.87-2.88a2.63 2.63 0 013.71 3.71l-3.18 3.17a1.56 1.56 0 01-2.2-2.2l2.8-2.8a.5.5 0 11.7.7l-2.8 2.8a.56.56 0 00.8.8l3.17-3.18a1.63 1.63 0 00-2.3-2.3z" fill={primaryFill} /></svg>;
}

const MailAttach16Filled = wrapIcon(rawSvg({}), 'MailAttach16Filled');
export default MailAttach16Filled;
      