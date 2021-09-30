import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.98 3.2a1 1 0 10-1.96-.4L9.75 9H4a1 1 0 000 2h5.34l-1.22 6H3a1 1 0 100 2h4.7l-1.18 5.8a1 1 0 101.96.4L9.75 19h5.96l-1.19 5.8a1 1 0 101.96.4l1.27-6.2H23a1 1 0 100-2h-4.84l1.22-6H24a1 1 0 100-2h-4.2l1.18-5.8a1 1 0 10-1.96-.4L17.75 9H11.8l1.19-5.8zM16.12 17h-5.96l1.22-6h5.96l-1.22 6z" fill={primaryFill} /></svg>;
}

const NumberSymbol28Filled = wrapIcon(rawSvg({}), 'NumberSymbol28Filled');
export default NumberSymbol28Filled;
      