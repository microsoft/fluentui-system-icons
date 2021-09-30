import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.25 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
}

const DocumentProhibited24Filled = wrapIcon(rawSvg({}), 'DocumentProhibited24Filled');
export default DocumentProhibited24Filled;
      