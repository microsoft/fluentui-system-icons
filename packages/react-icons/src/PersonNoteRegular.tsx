import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8 1.1.69 2.5 1.07 4.03 1.17A3 3 0 019 17v-.04a7.42 7.42 0 01-3.33-1A3.36 3.36 0 014 13a1 1 0 011-1h4.17a3 3 0 01.6-1H5zm5 2c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-4zm6.5 3h-4a.5.5 0 100 1h4a.5.5 0 100-1zm-4-3a.5.5 0 100 1h4a.5.5 0 100-1h-4z" fill={primaryFill} /></svg>;
}

const PersonNoteRegular = wrapIcon(rawSvg({}), 'PersonNoteRegular');
export default PersonNoteRegular;
      