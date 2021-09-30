import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.94 3.47L3.47 5.94a1.5 1.5 0 000 2.12l2.97 2.96c-.25.24-.45.51-.6.82L2.77 8.77a2.5 2.5 0 010-3.54l2.46-2.46a2.5 2.5 0 013.54 0L11.3 5.3c-.3.17-.55.39-.76.65L8.06 3.47a1.5 1.5 0 00-2.12 0zM15.9 7c-.2-.58-.76-1-1.41-1h-2c-.65 0-1.2.42-1.41 1H11a2 2 0 00-2 2v2.31a2.76 2.76 0 00-.56-.06c-.36 0-.77.08-1.13.35-.37.27-.65.69-.8 1.28a.5.5 0 00.3.58c1.9.81 3 2.1 3.61 3.03A3.1 3.1 0 0012.94 18h1.82A2.5 2.5 0 0017 16.62l.63-1.26a3.5 3.5 0 00.37-1.57V9a2 2 0 00-2-2h-.09zM14 7h.5c.28 0 .5.22.5.5v4a.5.5 0 101 0V8a1 1 0 011 1v4.8c0 .38-.09.76-.26 1.11l-.63 1.26c-.26.5-.78.83-1.35.83h-1.82c-.64 0-1.27-.42-1.68-1.05a9.01 9.01 0 00-3.64-3.21.91.91 0 01.28-.34.9.9 0 01.54-.15 2 2 0 01.83.2A.5.5 0 0010 12V9a1 1 0 011-1v3.5a.5.5 0 101 0v-4c0-.28.22-.5.5-.5h.5v4.5a.5.5 0 101 0V7zM3.5 12c.28 0 .5.22.5.5v.5h.5a.5.5 0 010 1H4v.5a.5.5 0 01-1 0V14h-.5a.5.5 0 010-1H3v-.5c0-.28.22-.5.5-.5zM7 15.5a.5.5 0 00-1 0v.5h-.5a.5.5 0 000 1H6v.5a.5.5 0 001 0V17h.5a.5.5 0 000-1H7v-.5z" fill={primaryFill} /></svg>;
}

const SanitizeRegular = wrapIcon(rawSvg({}), 'SanitizeRegular');
export default SanitizeRegular;
      