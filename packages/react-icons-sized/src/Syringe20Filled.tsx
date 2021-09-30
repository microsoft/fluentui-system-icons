import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.15 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7l-.4-.4-1.8 1.8 1.9 1.9a.5.5 0 01-.7.7L15 8.71l-5.56 5.56a2.5 2.5 0 01-1.77.73H5.71l-2.86 2.85a.5.5 0 01-.7-.7L5 14.29v-1.96c0-.66.26-1.3.73-1.77L6.3 10l.86.85a.5.5 0 00.7-.7L7 9.29l.8-.79.85.85a.5.5 0 10.7-.7l-.85-.86.8-.79.85.85a.5.5 0 00.7-.7L10 6.29 11.3 5l-1.15-1.15a.5.5 0 01.7-.7l1.9 1.9 1.8-1.8-.4-.4a.5.5 0 010-.7zm1.9 2.6l-.8-.8-1.8 1.8.8.8 1.8-1.8z" fill={primaryFill} /></svg>;
}

const Syringe20Filled = wrapIcon(rawSvg({}), 'Syringe20Filled');
export default Syringe20Filled;
      