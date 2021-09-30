import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 1.25c1.43 0 2.61 1.1 2.74 2.5H17a.75.75 0 01.1 1.5H16.42l-.9 7.75H13.5a1.5 1.5 0 00-1.12 2.5 1.5 1.5 0 000 2 1.5 1.5 0 00-.3.5H6.85a2 2 0 01-1.99-1.77L3.58 5.25H3a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h4.26c.13-1.4 1.3-2.5 2.74-2.5zM8.5 7.5c-.25 0-.45.15-.5.36v6.28c.05.2.25.36.5.36s.45-.15.5-.36V7.86c-.05-.2-.25-.36-.5-.36zm3 0c-.25 0-.45.15-.5.36v6.28c.05.2.25.36.5.36s.45-.15.5-.36V7.86c-.05-.2-.25-.36-.5-.36zM10 2.75c-.6 0-1.1.43-1.23 1h2.46c-.12-.57-.63-1-1.23-1zm3 11.75c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DeleteLinesFilled = wrapIcon(rawSvg({}), 'DeleteLinesFilled');
export default DeleteLinesFilled;
      