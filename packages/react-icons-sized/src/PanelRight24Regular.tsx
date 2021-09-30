import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 4A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4h14.5zm1.25 2.75c0-.69-.56-1.25-1.25-1.25H16v13h3.25c.69 0 1.25-.56 1.25-1.25V6.75zm-6 11.75v-13H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h9.75z" fill={primaryFill} /></svg>;
}

const PanelRight24Regular = wrapIcon(rawSvg({}), 'PanelRight24Regular');
export default PanelRight24Regular;
      