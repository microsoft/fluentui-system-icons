import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c1.15 0 2.24.29 3.19.8-.08.45-.23.76-.43.96-.1.11-.25.2-.43.28A5.25 5.25 0 1011.77 14L12 14a5.28 5.28 0 004.38-2.35c.64.22 1.4.08 1.9-.4a6.76 6.76 0 01-1.93 2.67l1.62 4.86c.26.8-.08 1.67-.81 2.08-1.37.77-3.1 1.14-5.16 1.14s-3.79-.37-5.16-1.14a1.75 1.75 0 01-.8-2.08l1.61-4.86A6.74 6.74 0 0112 2zm3.06 12.8l-.36.14h-.02c-.73.32-1.52.51-2.35.55H12.24l-.24.01h-.33a6.68 6.68 0 01-2.35-.55l-.02-.01-.36-.15-1.48 4.46c-.04.12 0 .24.11.3 1.13.63 2.6.95 4.43.95 1.83 0 3.3-.32 4.43-.95.1-.06.15-.18.11-.3l-1.48-4.46zm-3.37.7H12h-.31zm6.3-13.62L18 2c0 1.15.27 1.96.78 2.47.47.47 1.2.74 2.21.78h.26c.96 0 1 1.38.12 1.5h-.12c-1.15 0-1.96.27-2.47.78-.47.47-.74 1.2-.78 2.21V10c0 1-1.5 1-1.5 0 0-1.15-.27-1.96-.78-2.47-.47-.47-1.2-.74-2.21-.78h-.26c-.96 0-1-1.38-.12-1.5h.12c1.15 0 1.96-.27 2.47-.78.51-.51.78-1.32.78-2.47 0-.96 1.38-1 1.5-.12zm-.74 3.07l-.14.2a3.6 3.6 0 01-.9.85 3.64 3.64 0 011.04 1.05A3.64 3.64 0 0118.3 6a3.64 3.64 0 01-.9-.84l-.15-.2z" fill={primaryFill} /></svg>;
}

const Predictions24Regular = wrapIcon(rawSvg({}), 'Predictions24Regular');
export default Predictions24Regular;
      