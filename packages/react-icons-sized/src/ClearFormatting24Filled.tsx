import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM3 19h8.17c.17.72.46 1.4.85 2H3a1 1 0 01-.12-2H3zm12.1-4.03l-.08.05-.05.07a.5.5 0 000 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 00-.5-.05l-.07.05zM16 3a1 1 0 011 1.05l-.01.11-.25 1.5a1 1 0 01-1.98-.2v-.12l.06-.34h-3.39L9.67 16H10a1 1 0 011 .88V17a1 1 0 01-.88 1H7a1 1 0 01-.12-2h.77L9.4 5H5.85l-.11.66a1 1 0 01-1.99-.2l.01-.12.25-1.5A1 1 0 014.88 3L5 3h11z" fill={primaryFill} /></svg>;
}

const ClearFormatting24Filled = wrapIcon(rawSvg({}), 'ClearFormatting24Filled');
export default ClearFormatting24Filled;
      