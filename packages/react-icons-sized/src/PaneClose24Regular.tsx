import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 9.25a.75.75 0 011.05-.06l2.5 2.25a.75.75 0 010 1.12l-2.5 2.25a.75.75 0 01-1-1.12l1.05-.94H6.75a.75.75 0 110-1.5h3.55l-1.05-.94a.75.75 0 01-.06-1.06zm12.8 8A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5zm-2.75 1.25c.69 0 1.25-.56 1.25-1.25V6.75c0-.7-.56-1.25-1.25-1.25H16v13h3.25zm-4.75 0v-13H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .7.56 1.25 1.25 1.25h9.75z" fill={primaryFill} /></svg>;
}

const PaneClose24Regular = wrapIcon(rawSvg({}), 'PaneClose24Regular');
export default PaneClose24Regular;
      