import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 6.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M12.75 7.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M15.25 9a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M14.5 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M13.25 14a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M13.7 3a7.82 7.82 0 00-7.93.17 9.6 9.6 0 00-3.25 3.89 5.9 5.9 0 00-.62 2.43c0 .8.27 1.57.94 2.12.61.5 1.14.74 1.66.77.51.02.92-.19 1.23-.37l.2-.12c.24-.15.44-.27.69-.35.28-.09.64-.12 1.16.04.19.06.3.14.38.24.09.1.16.26.2.47.06.21.09.46.1.76.02.1.02.24.03.37l.04.58c.05.67.17 1.44.57 2.14.42.7 1.1 1.3 2.2 1.68 1.6.54 3.07.1 4.21-.8a7.46 7.46 0 002.37-3.6C19.2 9.16 17.68 5.04 13.7 3zM6.3 4.01a6.82 6.82 0 016.94-.14c3.5 1.8 4.87 5.4 3.69 9.25a6.46 6.46 0 01-2.04 3.1 3.33 3.33 0 01-3.26.64c-.9-.3-1.38-.76-1.66-1.24a4 4 0 01-.44-1.7l-.04-.54-.02-.41c-.03-.31-.06-.63-.13-.93-.07-.3-.2-.6-.4-.86-.22-.26-.5-.46-.87-.57a2.85 2.85 0 00-1.75-.03c-.38.12-.7.32-.95.47l-.14.09c-.29.16-.48.24-.68.23-.22-.01-.55-.12-1.08-.55-.38-.31-.57-.76-.57-1.34 0-.6.19-1.29.52-2.01A8.63 8.63 0 016.3 4.02z" fill={primaryFill} /></svg>;
}

const Color20Regular = wrapIcon(rawSvg({}), 'Color20Regular');
export default Color20Regular;
      