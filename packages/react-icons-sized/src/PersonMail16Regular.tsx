import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10c0 1.5 1.09 3.05 3 3.69v-1.07c-1.3-.55-2-1.61-2-2.62v-.5c0-.28.22-.5.5-.5H5c0-.36.1-.7.27-1H3.5C2.67 8 2 8.67 2 9.5v.5z" fill={primaryFill} /><path d="M7 1.5A2.75 2.75 0 117 7a2.75 2.75 0 010-5.5zm0 1A1.75 1.75 0 107 6a1.75 1.75 0 000-3.5z" fill={primaryFill} /><path d="M10.51 11.93L6.01 9.3c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43z" fill={primaryFill} /><path d="M10.74 12.94l4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 016 13.5v-3.05l4.25 2.48c.15.09.33.1.49.01z" fill={primaryFill} /></svg>;
}

const PersonMail16Regular = wrapIcon(rawSvg({}), 'PersonMail16Regular');
export default PersonMail16Regular;
      