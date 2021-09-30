import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.98 5.48a1.25 1.25 0 00-2.46-.46L17.66 15H7.25a1.25 1.25 0 000 2.5h9.94L14.86 30H5.25a1.25 1.25 0 000 2.5h9.14l-1.87 10.02a1.25 1.25 0 002.46.46l1.95-10.48H28.4l-1.87 10.02a1.25 1.25 0 002.46.46l1.95-10.48h9.82a1.25 1.25 0 100-2.5H31.4l2.33-12.5h9.02a1.25 1.25 0 100-2.5H34.2l1.78-9.52a1.25 1.25 0 00-2.46-.46L31.66 15H20.2l1.78-9.52zM28.86 30H17.4l2.33-12.5H31.2L28.86 30z" fill={primaryFill} /></svg>;
}

const NumberSymbol48Regular = wrapIcon(rawSvg({}), 'NumberSymbol48Regular');
export default NumberSymbol48Regular;
      