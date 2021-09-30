import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.12 2a1.5 1.5 0 00-1.34.83L6.2 4H4.5A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 013 14.5v-8C3 5.67 3.68 5 4.5 5h2a.5.5 0 00.45-.28l.73-1.44A.5.5 0 018.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 00.45.28h2c.82 0 1.5.67 1.5 1.5v3.1c.35.19.69.4 1 .66V6.5A2.5 2.5 0 0015.5 4h-1.7l-.58-1.17A1.5 1.5 0 0011.89 2H8.12z" fill={primaryFill} /><path d="M10 6a4 4 0 013.88 3.03c-.33.04-.66.11-.98.2a3 3 0 10-3.66 3.67c-.1.32-.17.65-.2.98A4 4 0 0110 6z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 100 1H14v1.5a.5.5 0 101 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const CameraAddRegular = wrapIcon(rawSvg({}), 'CameraAddRegular');
export default CameraAddRegular;
      