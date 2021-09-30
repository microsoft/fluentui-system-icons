import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 7a.5.5 0 100 1h5a.5.5 0 000-1h-5zM7 10.5c0-.28.22-.5.5-.5h4.67a3 3 0 00-.17 1H7.5a.5.5 0 01-.5-.5zm8-6V8a3 3 0 011 .17V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 00-1 0V3h-2.5v-.5a.5.5 0 00-1 0V3H7v-.5a.5.5 0 00-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h5.25a4.13 4.13 0 01-.5-1H5.5a.5.5 0 01-.5-.5v-12c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5zM7.5 13a.5.5 0 100 1h2a.5.5 0 000-1h-2zm9.5-2a2 2 0 10-4 0 2 2 0 004 0zm-6 4.5a3.83 3.83 0 00.32 1.5c.21.44.52.81.9 1.11.73.6 1.73.89 2.78.89 1.05 0 2.05-.29 2.79-.89.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
}

const NotepadPersonRegular = wrapIcon(rawSvg({}), 'NotepadPersonRegular');
export default NotepadPersonRegular;
      