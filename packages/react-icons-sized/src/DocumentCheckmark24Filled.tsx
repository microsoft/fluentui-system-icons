import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zm-1.5 15a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0L5.5 18.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const DocumentCheckmark24Filled = wrapIcon(rawSvg({}), 'DocumentCheckmark24Filled');
export default DocumentCheckmark24Filled;
      