import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8c0-1.1.9-2 2-2V2.5zM8 6h4V3H8v3z" fill={primaryFill} /></svg>;
}

const UsbStickFilled = wrapIcon(rawSvg({}), 'UsbStickFilled');
export default UsbStickFilled;
      