import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 9c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2zM9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5zm.6-2.5A5.52 5.52 0 0112 9.6V8H8v4h1.6zM7 12V8H3v4h4zm-4 1h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-1-4v4H8V3h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm12 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.12-3a.5.5 0 00-.47.33l-.88 2.5A.5.5 0 0013 15h.78l-.51 1.87a.5.5 0 00.9.4l2.25-3.5A.5.5 0 0016 13h-.75l.28-.84a.5.5 0 00-.47-.66h-1.18z" fill={primaryFill} /></svg>;
}

const TableLightning20Filled = wrapIcon(rawSvg({}), 'TableLightning20Filled');
export default TableLightning20Filled;
      