import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h8.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V9.6c-.32-.16-.65-.3-1-.4V6.63a1 1 0 00-.3-.7L14.1 4.28a1 1 0 00-.71-.29H13v2.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 6.5V4H5a1 1 0 00-1 1v10a1 1 0 001 1v-4.5c0-.83.67-1.5 1.5-1.5h4.84c-.4.28-.77.62-1.08 1H6.5a.5.5 0 00-.5.5V16h3.2c.1.35.24.68.4 1H5a2 2 0 01-2-2V5zm4-1v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V4H7zm12 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /></svg>;
}

const SaveArrowRightRegular = wrapIcon(rawSvg({}), 'SaveArrowRightRegular');
export default SaveArrowRightRegular;
      