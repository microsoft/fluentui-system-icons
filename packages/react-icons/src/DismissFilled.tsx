import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.9 4.05l.07-.08a.75.75 0 01.98-.07l.08.07L10 8.94l4.97-4.97a.75.75 0 01.98-.07l.08.07c.27.27.3.68.07.98l-.07.08L11.06 10l4.97 4.97c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L10 11.06l-4.97 4.97a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08L8.94 10 3.97 5.03a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
}

const DismissFilled = wrapIcon(rawSvg({}), 'DismissFilled');
export default DismissFilled;
      