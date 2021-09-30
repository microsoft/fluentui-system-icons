import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 00-1.68-.73l-3.88 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.34.13l3.88 3.6a1 1 0 001.68-.74V3.01zM7.12 6.6L11 3v14l-3.88-3.6A1.5 1.5 0 006.1 13H3.5a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5h2.6c.38 0 .75-.14 1.02-.4z" fill={primaryFill} /><path d="M13.14 7.65c.2-.2.52-.2.71 0l1.65 1.64 1.64-1.64a.5.5 0 11.71.7L16.2 10l1.65 1.65a.5.5 0 11-.7.7l-1.65-1.64-1.65 1.64a.5.5 0 11-.7-.7L14.78 10l-1.65-1.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const SpeakerMuteRegular = wrapIcon(rawSvg({}), 'SpeakerMuteRegular');
export default SpeakerMuteRegular;
      