import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.12 7c.12-.93.32-1.76.58-2.42.21-.55.45-.97.7-1.23.24-.27.44-.35.6-.35.16 0 .36.08.6.35.25.26.49.68.7 1.23.26.66.46 1.49.58 2.42H8.12zm-.35-2.78c.13-.34.28-.67.45-.95A6.02 6.02 0 004.34 7h2.78c.12-1.05.35-2 .65-2.78zm4.46 0a6.18 6.18 0 00-.45-.95A6.02 6.02 0 0115.66 7h-2.78c-.12-1.05-.35-2-.65-2.78zM12.97 8h2.95a6.04 6.04 0 010 2h-2.95a17.34 17.34 0 000-2zm-.09 3h2.78a6.02 6.02 0 01-3.88 3.73c.17-.28.32-.6.45-.95.3-.78.53-1.73.65-2.78zm-2.28 3.65c-.24.27-.44.35-.6.35-.16 0-.36-.08-.6-.35a3.99 3.99 0 01-.7-1.23c-.26-.66-.46-1.49-.58-2.42h3.76c-.12.93-.32 1.76-.58 2.42-.21.55-.45.97-.7 1.23zM4.34 11a6.02 6.02 0 003.88 3.73c-.17-.28-.32-.6-.45-.95-.3-.78-.53-1.73-.65-2.78H4.34zm2.69-1H4.08a6.04 6.04 0 010-2h2.95a17.4 17.4 0 000 2zm1-2a16.36 16.36 0 000 2h3.94a16.37 16.37 0 000-2H8.03zM3.5 13h.75c.25.36.53.69.84 1A.5.5 0 015 14H3.89l-.75 3h13.72l-.75-3H15a.5.5 0 01-.1 0c.32-.31.6-.64.85-1h.75a.5.5 0 01.49.38l1 4a.5.5 0 01-.49.62h-15a.5.5 0 01-.49-.62l1-4A.5.5 0 013.5 13z" fill={primaryFill} /></svg>;
}

const GlobeSurfaceFilled = wrapIcon(rawSvg({}), 'GlobeSurfaceFilled');
export default GlobeSurfaceFilled;
      