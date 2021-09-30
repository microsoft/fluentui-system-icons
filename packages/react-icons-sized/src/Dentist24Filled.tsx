import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.35 4.39c1-.84 2.3-1.39 3.4-1.39.87 0 1.55.14 2.1.37.57.23.96.55 1.26.84l.35.37.03.03c.1.12.19.2.26.27.12.1.18.12.25.12s.13-.01.25-.12l.26-.27.03-.03.35-.37c.3-.3.7-.6 1.25-.84A5.4 5.4 0 0116.25 3c1.1 0 2.4.55 3.4 1.39 1 .84 1.85 2.08 1.85 3.56 0 .78 0 2.3-1.37 3.94a3.75 3.75 0 00-.63 1.86 10.02 10.02 0 01-1.08 4.73c-.62 1.12-1.56 2.02-2.67 2.02-.36 0-.7-.1-.98-.31a1.9 1.9 0 01-.58-.74 6.13 6.13 0 01-.41-1.8l-.09-.8c-.11-1.11-.23-2.26-.63-3.3-.18-.35-.5-.55-.81-.55h-.5c-.31 0-.64.2-.83.58a9.08 9.08 0 00-.67 3.56l-.03.47a5.5 5.5 0 01-.33 1.83c-.13.28-.32.56-.62.77-.3.2-.65.29-1.02.29-1.24 0-2.19-.87-2.79-2.04a10.6 10.6 0 01-.96-4.7 3.62 3.62 0 00-.79-2.05C2.5 10.27 2.5 8.68 2.5 7.97v-.02c0-1.48.85-2.72 1.85-3.56zM15.75 6a.75.75 0 000 1.5c.71 0 1.25.54 1.25 1.25a.75.75 0 001.5 0C18.5 7.21 17.3 6 15.75 6z" fill={primaryFill} /></svg>;
}

const Dentist24Filled = wrapIcon(rawSvg({}), 'Dentist24Filled');
export default Dentist24Filled;
      