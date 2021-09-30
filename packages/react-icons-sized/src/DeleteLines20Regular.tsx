import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 4a2.5 2.5 0 015 0H17a.5.5 0 010 1h-.55l-.93 8h-1l.92-8H4.56l1.28 11.11a1 1 0 001 .89h5.25c.06.19.16.36.3.5a1.5 1.5 0 00-.3.5H6.84a2 2 0 01-1.99-1.77L3.55 5H3a.5.5 0 01-.5-.41V4.5c0-.28.22-.5.5-.5h4.5zm4 0a1.5 1.5 0 00-3 0h3zm2 12a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0-2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm-5-6.5c.25 0 .45.15.5.36v6.2c0 .24-.22.44-.5.44-.25 0-.45-.15-.5-.36v-6.2c0-.24.22-.44.5-.44zm3 0c.25 0 .45.15.5.36v6.2c0 .24-.22.44-.5.44-.25 0-.45-.15-.5-.36v-6.2c0-.24.22-.44.5-.44zm1.5 11c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DeleteLines20Regular = wrapIcon(rawSvg({}), 'DeleteLines20Regular');
export default DeleteLines20Regular;
      