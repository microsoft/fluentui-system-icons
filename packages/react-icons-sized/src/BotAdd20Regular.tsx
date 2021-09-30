import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5.5a1 1 0 100 2 1 1 0 000-2zm-5 1a1 1 0 112 0 1 1 0 01-2 0zm3.5-4a.5.5 0 00-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h4.84a5.47 5.47 0 013.57-.98c.06-.17.09-.34.09-.52v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5zM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5zm2 7.5h1.39c-.2.31-.38.65-.52 1H5.31a.8.8 0 00-.81.81v.44c0 .69.13 1.46.8 2.07.65.6 1.9 1.12 4.3 1.18.18.35.4.69.66 1h-.51c-2.62-.04-4.2-.6-5.12-1.44A3.52 3.52 0 013.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h3.2v-.01zm10.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const BotAdd20Regular = wrapIcon(rawSvg({}), 'BotAdd20Regular');
export default BotAdd20Regular;
      