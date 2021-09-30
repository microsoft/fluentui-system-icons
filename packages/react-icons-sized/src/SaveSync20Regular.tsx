import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h8.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V9.6c-.32-.16-.65-.3-1-.4V6.63a1 1 0 00-.3-.7L14.1 4.28a1 1 0 00-.71-.29H13v2.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 6.5V4H5a1 1 0 00-1 1v10a1 1 0 001 1v-4.5c0-.83.67-1.5 1.5-1.5h4.84c-.4.28-.77.62-1.08 1H6.5a.5.5 0 00-.5.5V16h3.2c.1.35.24.68.4 1H5a2 2 0 01-2-2V5zm4-1v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V4H7zm3 10.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const SaveSync20Regular = wrapIcon(rawSvg({}), 'SaveSync20Regular');
export default SaveSync20Regular;
      