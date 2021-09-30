import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a6 6 0 014.64 9.8 6.46 6.46 0 00-2.07-.71l.23-.23.16-.17a4 4 0 00-5.75-5.55l-.16.16-.02.01-9.32 9.33a1 1 0 01-1.42-1.41L11.6 3.9l.05-.04A5.98 5.98 0 0116 2zm-4.91 16.57c.12.75.37 1.45.73 2.1l-.34.34-.05.04-.06.05a3.71 3.71 0 01-6.15-2.82c0-.9.32-1.76.9-2.42l.15-.17h.01l7.3-7.31a1 1 0 011.4 1.41L7.7 17.1l-.01.01a1.72 1.72 0 002.29 2.55l.12-.1.99-.98zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const AttachArrowRight24Filled = wrapIcon(rawSvg({}), 'AttachArrowRight24Filled');
export default AttachArrowRight24Filled;
      