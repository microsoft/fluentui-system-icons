import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.19 15.9l-.04.33A2 2 0 0113.16 18H6.84a2 2 0 01-1.99-1.77L3.58 5.25H3a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h.04l-.9-.9a.5.5 0 11.71-.7l5.41 5.4 9.6 9.6a.5.5 0 01-.71.7l-1.96-1.95zM8 8.7v5.44c.05.2.25.36.5.36s.45-.15.5-.36V9.71l-1-1zm3 3v2.44c.05.2.25.36.5.36s.45-.15.5-.36V12.71l-1-1z" fill={primaryFill} /><path d="M11 8.88L5.87 3.75h1.4a2.75 2.75 0 015.47 0H17a.75.75 0 01.1 1.5H16.42l-.94 8.11L12 9.88V7.86c-.05-.2-.25-.36-.5-.36s-.45.15-.5.36v1.02zm-1-6.13c-.6 0-1.1.43-1.23 1h2.46c-.12-.57-.63-1-1.23-1z" fill={primaryFill} /></svg>;
}

const DeleteOffFilled = wrapIcon(rawSvg({}), 'DeleteOffFilled');
export default DeleteOffFilled;
      