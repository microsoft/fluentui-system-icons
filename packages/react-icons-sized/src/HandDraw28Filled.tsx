import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.77 3c1.66-.02 3.84-.05 5.66.15 1.02.11 1.86.29 2.43.53.6.26.64.48.64.57 0 .14-.05.3-.41.5-.38.21-1 .39-1.84.5A48.8 48.8 0 0113 5.5h-.05c-2.27 0-4.63 0-6.42.26-.9.13-1.72.33-2.35.68C3.53 6.8 3 7.39 3 8.25c0 .66.34 1.16.76 1.52.4.34.93.58 1.44.75 1.03.35 2.24.48 3.05.48H9V9.5h-.75c-.69 0-1.73-.12-2.58-.4-.42-.14-.74-.3-.94-.48-.2-.16-.23-.28-.23-.37 0-.14.05-.3.4-.5.4-.21 1-.39 1.85-.5A48.8 48.8 0 0113 7h.05c2.27 0 4.63 0 6.42-.26.89-.13 1.72-.33 2.35-.68.65-.36 1.18-.95 1.18-1.81 0-1.02-.78-1.61-1.54-1.94-.78-.34-1.8-.53-2.86-.65a51.6 51.6 0 00-6.36-.16.75.75 0 00.02 1.5h.51zM11 10.74a2.75 2.75 0 115.5 0v3.1l2.4.33a3.75 3.75 0 013.15 4.5l-1.03 4.78a2.75 2.75 0 01-2.26 2.13l-2.78.44a2.75 2.75 0 01-2.81-1.35l-.36-.62a6.25 6.25 0 00-2.37-2.35l-4.56-2.56a.75.75 0 01-.34-.89c.3-.91 1-1.87 2.16-2.3a4.64 4.64 0 013.3.13v-5.34z" fill={primaryFill} /></svg>;
}

const HandDraw28Filled = wrapIcon(rawSvg({}), 'HandDraw28Filled');
export default HandDraw28Filled;
      