import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 6.75v10.5a.75.75 0 01-1.5.1V6.75a.75.75 0 011.5-.1v.1zm-3 10.5V6.65a.75.75 0 00-1.5.1v10.6a.75.75 0 001.5-.1zM18.25 21A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5zM19.5 5.75v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25z" fill={primaryFill} /></svg>;
}

const TextboxAlignBottomRotate9024Regular = wrapIcon(rawSvg({}), 'TextboxAlignBottomRotate9024Regular');
export default TextboxAlignBottomRotate9024Regular;
      