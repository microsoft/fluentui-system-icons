import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.88 11.81a5.5 5.5 0 10-9.76-2.16c.19-.28.48-.48.8-.54.2-.04.41-.07.62-.09a4 4 0 115.32 3.23l.08.2c.16.5 0 1.03-.4 1.35l-.14.12c.86-.15 1.7-.5 2.42-1.05l4.28 4.28a.75.75 0 001.06-1.06l-4.28-4.28zm-10.99-.5c-.4.43-.7.92-.88 1.46-.03.09 0 .19.08.25l.76.62.06.06c.18.2.15.5-.06.66l-.76.62a.23.23 0 00-.08.25c.18.54.48 1.03.88 1.45.07.07.17.1.27.06l.94-.32.08-.02a.5.5 0 01.57.38l.18.94c.02.1.1.17.2.2a4.4 4.4 0 001.75 0c.1-.03.17-.1.19-.2l.18-.94.02-.07a.5.5 0 01.63-.29l.94.32c.1.04.2.01.27-.06.4-.42.7-.91.88-1.45.03-.09 0-.19-.08-.25l-.76-.62a.46.46 0 010-.72l.76-.62c.08-.06.1-.16.08-.25a3.96 3.96 0 00-.88-1.45.25.25 0 00-.27-.06l-.94.32a.5.5 0 01-.65-.36l-.18-.94a.24.24 0 00-.2-.2 4.4 4.4 0 00-1.75 0c-.1.03-.17.1-.19.2l-.18.94-.02.07a.5.5 0 01-.63.29l-.94-.32c-.1-.04-.2-.01-.27.06zM5 15.18A1.2 1.2 0 013.78 14c0-.64.55-1.17 1.22-1.17.67 0 1.22.53 1.22 1.17A1.2 1.2 0 015 15.17z" fill={primaryFill} /></svg>;
}

const SearchSettingsFilled = wrapIcon(rawSvg({}), 'SearchSettingsFilled');
export default SearchSettingsFilled;
      