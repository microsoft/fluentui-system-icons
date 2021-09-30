import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.5A8.5 8.5 0 005.98 19a.75.75 0 01-1.06 1.06 10 10 0 1116.45-3.56h-.82a3.77 3.77 0 00.18-5.32 3.77 3.77 0 00-.54-.48A8.5 8.5 0 0012 4.5zm2.25 9.25c0-.43.07-.84.2-1.22a2.5 2.5 0 10-.19 1.53l-.01-.31zM11 13a1 1 0 112 0 1 1 0 01-2 0zm5.28-2.58c.45-.24.96-.38 1.5-.41A6.5 6.5 0 107.4 17.6a.75.75 0 101.06-1.06 5 5 0 117.82-6.12zM20 11.86a2.74 2.74 0 10-4 3.77 2.74 2.74 0 004-3.77zm-5.5 5.64h-.13A1.5 1.5 0 0013 19v.5c0 .5.12 1.02.36 1.5.28.57.72 1.09 1.3 1.5.83.61 1.96 1 3.34 1 3.14 0 5-2.03 5-4V19c0-.83-.67-1.5-1.5-1.5h-7z" fill={primaryFill} /></svg>;
}

const CommunicationPerson24Regular = wrapIcon(rawSvg({}), 'CommunicationPerson24Regular');
export default CommunicationPerson24Regular;
      