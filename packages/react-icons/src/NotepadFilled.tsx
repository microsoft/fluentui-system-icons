import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5a.5.5 0 00-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H11v-3.5c0-.83.67-1.5 1.5-1.5H16V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 00-1 0V3h-2.5v-.5a.5.5 0 00-1 0V3H7v-.5zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5h5a.5.5 0 010 1h-5a.5.5 0 010-1zM7 13.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M15.69 14H12.5a.5.5 0 00-.5.5v3.19l.15-.13 3.41-3.41.13-.15z" fill={primaryFill} /></svg>;
}

const NotepadFilled = wrapIcon(rawSvg({}), 'NotepadFilled');
export default NotepadFilled;
      