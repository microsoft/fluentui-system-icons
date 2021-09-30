import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.41 2.5h.13l.11.02.07.03 6 3a.5.5 0 010 .9L13.62 9l5.1 2.55a.5.5 0 010 .9l-5.76 2.84.04 5.7a.5.5 0 01-.75.44l-6-3.5A.5.5 0 016 17.5V5.96l.02-.1.02-.06.01-.03a.5.5 0 01.06-.09l.07-.06.07-.05 6.08-3.04.08-.02zM7 12.82v4.4l5 2.92-.04-4.82L7 12.81zm.62-.8L12 14.2V9.83L7.61 12zm5.37-2.2v4.34L17.39 12l-4.39-2.2zM7 11.18l4.37-2.17L7 6.82v4.37zm5-7.38l-4.38 2.2 4.37 2.2v-4.4zm1 4.38L17.37 6 13 3.8v4.4z" fill={primaryFill} /></svg>;
}

const Fluent24Regular = wrapIcon(rawSvg({}), 'Fluent24Regular');
export default Fluent24Regular;
      