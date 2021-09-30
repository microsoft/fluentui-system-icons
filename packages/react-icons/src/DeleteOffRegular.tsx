import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4h.3L2.14 2.85a.5.5 0 11.7-.7l5.41 5.4 9.6 9.6a.5.5 0 01-.71.7l-1.96-1.95-.04.33A2 2 0 0113.16 18H6.84a2 2 0 01-1.99-1.77L3.55 5H3a.5.5 0 01-.5-.41V4.5c0-.28.22-.5.5-.5zm11.29 11L12 12.7v1.36c0 .24-.22.44-.5.44-.25 0-.45-.15-.5-.36v-2.43l-2-2v4.35c0 .24-.22.44-.5.44-.25 0-.45-.15-.5-.36V8.71L4.6 5.3l1.24 10.8a1 1 0 001 .89h6.32a1 1 0 001-.89l.13-1.12z" fill={primaryFill} /><path d="M15.48 13.36l-.9-.9.86-7.46H7.12l-1-1H7.5a2.5 2.5 0 015 0H17a.5.5 0 010 1h-.55l-.97 8.36zM11.5 4a1.5 1.5 0 00-3 0h3z" fill={primaryFill} /><path d="M12 9.88l-1-1v-.94c0-.24.22-.44.5-.44.25 0 .45.15.5.36v2.02z" fill={primaryFill} /></svg>;
}

const DeleteOffRegular = wrapIcon(rawSvg({}), 'DeleteOffRegular');
export default DeleteOffRegular;
      