import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6A5 5 0 111 6a5 5 0 0110 0zM9.5 6c0-.7-.2-1.34-.55-1.89L4.1 8.95A3.5 3.5 0 009.5 6zM7.89 3.05A3.5 3.5 0 003.05 7.9L7.9 3.05z" fill={primaryFill} /></svg>;
}

const Prohibited12Filled = wrapIcon(rawSvg({}), 'Prohibited12Filled');
export default Prohibited12Filled;
      