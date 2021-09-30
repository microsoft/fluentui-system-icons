import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 6.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M7.5 8.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M6.75 12.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M10.5 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M9.75 9.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M10.5 11.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M12.75 12.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M4.5 18a.5.5 0 01-.5-.5v-14C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 01-.5.5h-11zM5 3.5V17h2v-2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V17h2V9.5a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5v-5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5zM12 15h-1.5v2H12v-2zm-2.5 0H8v2h1.5v-2z" fill={primaryFill} /></svg>;
}

const Building20Regular = wrapIcon(rawSvg({}), 'Building20Regular');
export default Building20Regular;
      