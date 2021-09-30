import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 13l1.85 1.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.5 3.21A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h8.8zm-1-1H3.5A1.5 1.5 0 012 10.5v-5c0-.76.57-1.4 1.3-1.49l1.76 1.76C4.4 6.15 4 6.93 4 8c0 1.14.46 1.94 1.18 2.3.7.34 1.52.2 2.07-.35a.5.5 0 10-.7-.7.8.8 0 01-.93.15C5.34 9.26 5 8.86 5 8c0-.86.34-1.26.62-1.4a.79.79 0 01.2-.07L11.3 12zM8.45 6.34l.73.72a1 1 0 01.43-.46.8.8 0 01.93.15.5.5 0 00.7-.7 1.8 1.8 0 00-2.07-.35c-.29.14-.53.36-.72.64zM14 10.5c0 .38-.14.73-.38 1l.7.7a2.5 2.5 0 00.68-1.7v-5A2.5 2.5 0 0012.5 3H5.12l1 1h6.38c.83 0 1.5.67 1.5 1.5v5z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff16Regular = wrapIcon(rawSvg({}), 'ClosedCaptionOff16Regular');
export default ClosedCaptionOff16Regular;
      