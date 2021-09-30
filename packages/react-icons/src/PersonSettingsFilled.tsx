import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 01.05-6.94H4zm6.64 2.92a2 2 0 001.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.71 4.71 0 010-1.01l.46-.12zm4.86.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const PersonSettingsFilled = wrapIcon(rawSvg({}), 'PersonSettingsFilled');
export default PersonSettingsFilled;
      