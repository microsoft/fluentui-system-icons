import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h14.5A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75zM3.5 6.75c0-.69.56-1.25 1.25-1.25H5v13h-.25c-.69 0-1.25-.56-1.25-1.25V6.75zm3 11.75v-13H9v13H6.5zm7.5 0h-3.5v-13H14v13zm1.5 0v-13h3.75c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H15.5z" fill={primaryFill} /></svg>;
}

const SlideTransition24Regular = wrapIcon(rawSvg({}), 'SlideTransition24Regular');
export default SlideTransition24Regular;
      