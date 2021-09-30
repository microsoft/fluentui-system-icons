import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2v1.5c0 2.05-2.09 3.5-5.5 3.5S2 15.55 2 13.5V12c0-1.1.9-2 2-2h7z" fill={primaryFill} /><path d="M14.45 14.61c-.2-.04-.4-.05-.6-.03.08-.27.13-.55.14-.84l.01-.24V12c0-.7-.23-1.33-.63-1.84l-.13-.16h2.04l-.38.9-.05.15v.02c-.23.74-.04 1.57.53 2.11l.48.46a3.02 3.02 0 01-.7 1.2l-.53-.18-.16-.04h-.02z" fill={primaryFill} /><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /><path d="M14.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M15.83 11.26l.4-.94a.96.96 0 011.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 01-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 01.98-.4l.1.02 1.05.35a4.03 4.03 0 001.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1z" fill={primaryFill} /></svg>;
}

const PeopleCallFilled = wrapIcon(rawSvg({}), 'PeopleCallFilled');
export default PeopleCallFilled;
      