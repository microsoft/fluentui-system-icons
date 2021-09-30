import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.98 3.4a.75.75 0 10-1.46-.3L10.28 9H3.75a.75.75 0 000 1.5h6.22L8.6 17H2.75a.75.75 0 000 1.5h5.54l-1.27 6.1a.75.75 0 101.46.3l1.34-6.4h6.47l-1.27 6.1a.75.75 0 001.46.3l1.34-6.4h6.43a.75.75 0 000-1.5h-6.11l1.36-6.5h5.75a.75.75 0 000-1.5h-5.44l1.17-5.6a.75.75 0 10-1.46-.3L18.28 9h-6.47l1.17-5.6zM16.61 17h-6.47l1.36-6.5h6.47L16.6 17z" fill={primaryFill} /></svg>;
}

const NumberSymbol28Regular = wrapIcon(rawSvg({}), 'NumberSymbol28Regular');
export default NumberSymbol28Regular;
      