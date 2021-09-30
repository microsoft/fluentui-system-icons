import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 10h10c.55 0 1 .34 1 .75 0 .38-.38.7-.86.74l-.14.01H7c-.55 0-1-.34-1-.75 0-.38.38-.7.86-.74L7 10z" fill={primaryFill} /><path d="M15.33 13H8.57c-.32.06-.57.37-.57.75 0 .41.3.75.67.75h6.76c.32-.06.57-.37.57-.75 0-.41-.3-.75-.67-.75z" fill={primaryFill} /><path d="M21 5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75zM5.75 4.5h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
}

const TextboxAlignCenter24Regular = wrapIcon(rawSvg({}), 'TextboxAlignCenter24Regular');
export default TextboxAlignCenter24Regular;
      