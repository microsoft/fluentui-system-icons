import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h8.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V15a2 2 0 01-2 2h-2.88l-1-1H14v-4.5a.5.5 0 00-.5-.5h-3.26a4.53 4.53 0 00-.91-1h4.17c.83 0 1.5.67 1.5 1.5V16a1 1 0 001-1V6.62a1 1 0 00-.3-.7L14.1 4.28a1 1 0 00-.71-.29H13v2.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 6.5V4H5a1 1 0 00-1 1v4.76a4.52 4.52 0 00-1 .91V5zm4-1v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V4H7zm3 9.5c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L8.6 16.3a3.5 3.5 0 111.4-2.8zm-6 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" fill={primaryFill} /></svg>;
}

const SaveSearch20Regular = wrapIcon(rawSvg({}), 'SaveSearch20Regular');
export default SaveSearch20Regular;
      