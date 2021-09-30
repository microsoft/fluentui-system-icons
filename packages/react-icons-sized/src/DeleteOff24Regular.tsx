import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.94 5L2.22 3.28a.75.75 0 011.06-1.06l18.5 18.5a.75.75 0 01-1.06 1.06l-2.3-2.3v.04a2.75 2.75 0 01-2.56 2.47l-.17.01H8.3c-1.35 0-2.5-.99-2.71-2.3l-.02-.18L4.29 6.5H3.5a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74L3.5 5h.44zm13.11 13.12l-2.55-2.56V17a.75.75 0 01-1.5.1v-3.04l-2-2V17a.75.75 0 01-1.5.1v-6.54L5.84 6.9l1.23 12.47c.06.6.53 1.06 1.12 1.12l.12.01h7.38c.6 0 1.1-.42 1.22-1l.02-.13.12-1.25z" fill={primaryFill} /><path d="M13.02 9.84l1.48 1.48V9.9a.75.75 0 00-1.48-.06z" fill={primaryFill} /><path d="M18.2 6.5l-.77 7.75 1.38 1.38.9-9.13h.89a.75.75 0 00-.1-1.5h-5.25v-.18a3.25 3.25 0 00-6.5.18h-.57l1.5 1.5h8.52zM12 3.25c.97 0 1.75.78 1.75 1.75h-3.5v-.14c.08-.9.83-1.61 1.75-1.61z" fill={primaryFill} /></svg>;
}

const DeleteOff24Regular = wrapIcon(rawSvg({}), 'DeleteOff24Regular');
export default DeleteOff24Regular;
      