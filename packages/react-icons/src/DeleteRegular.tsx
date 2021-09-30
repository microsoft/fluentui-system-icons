import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4a1.5 1.5 0 00-3 0h-1a2.5 2.5 0 015 0H17a.5.5 0 010 1h-.55l-1.3 11.23A2 2 0 0113.16 18H6.84a2 2 0 01-1.99-1.77L3.55 5H3a.5.5 0 01-.5-.41V4.5c0-.28.22-.5.5-.5h8.5zm3.94 1H4.56l1.28 11.11a1 1 0 001 .89h6.32a1 1 0 001-.89L15.44 5zM8.5 7.5c.25 0 .45.15.5.36v6.2c0 .24-.22.44-.5.44-.25 0-.45-.15-.5-.36v-6.2c0-.24.22-.44.5-.44zm3 0c.25 0 .45.15.5.36v6.2c0 .24-.22.44-.5.44-.25 0-.45-.15-.5-.36v-6.2c0-.24.22-.44.5-.44z" fill={primaryFill} /></svg>;
}

const DeleteRegular = wrapIcon(rawSvg({}), 'DeleteRegular');
export default DeleteRegular;
      