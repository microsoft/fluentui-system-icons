import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M7.5 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M6 9.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M7.5 10a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M12 11.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M11.5 10a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M5.5 1a.5.5 0 00-.5.5V3h-.5a.5.5 0 00-.5.5v1.65c-.59.27-1 .86-1 1.55v6.8c0 .28.22.5.5.5h10a.5.5 0 00.5-.5v-3.3a3.7 3.7 0 00-3.7-3.7h-.31A1.7 1.7 0 009 5.15V3.5a.5.5 0 00-.5-.5H8V1.5a.5.5 0 00-.5-.5h-2zM8 5H5V4h3v1zm1 1.7V13H8v-1.1c0-.5-.4-.9-.9-.9H5.9c-.5 0-.9.4-.9.9V13H4V6.7c0-.39.31-.7.7-.7h3.6c.39 0 .7.31.7.7zM6 13v-1h1v1H6zm4 0V7.5h.3c1.5 0 2.7 1.2 2.7 2.7V13h-3zM7 3H6V2h1v1z" fill={primaryFill} /></svg>;
}

const BuildingSkyscraper16Regular = wrapIcon(rawSvg({}), 'BuildingSkyscraper16Regular');
export default BuildingSkyscraper16Regular;
      