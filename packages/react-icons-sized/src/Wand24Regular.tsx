import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.31 7.57l-.13.12L2.7 18.18a2.27 2.27 0 003.2 3.2L16.4 10.9c.88-.88.88-2.3 0-3.18l-.16-.15a2.25 2.25 0 00-2.92 0zm-.84 2.96l1.08 1.08-8.7 8.72a.77.77 0 11-1.1-1.1l8.72-8.7zM16.85 15l-.1-.01c-.38 0-.7.28-.74.65l-.01.1v.75h-.75c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01H16v.75c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1V18h.75c.38 0 .7-.28.74-.65l.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-.75v-.75c0-.38-.28-.7-.65-.74l-.1-.01h.1zM15.3 8.75l.03.03c.29.3.29.77 0 1.06l-.71.71-1.1-1.09.74-.73a.75.75 0 011.04.02zM6.85 5.01L6.75 5c-.38 0-.7.28-.74.65l-.01.1v.75h-.75c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01H6v.75c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1V8h.75c.38 0 .7-.28.74-.65l.01-.1c0-.38-.28-.7-.65-.74l-.1-.01H7.5v-.75c0-.38-.28-.7-.65-.74L6.75 5h.1zm12-2l-.1-.01c-.38 0-.7.28-.74.65l-.01.1v.75h-.75c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01H18v.75c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1V6h.75c.38 0 .7-.28.74-.65l.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-.75v-.75c0-.38-.28-.7-.65-.74l-.1-.01h.1z" fill={primaryFill} /></svg>;
}

const Wand24Regular = wrapIcon(rawSvg({}), 'Wand24Regular');
export default Wand24Regular;
      