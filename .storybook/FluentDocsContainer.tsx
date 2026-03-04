import * as React from 'react';
import {
  DocsContainer,
  type DocsContextProps,
} from '@storybook/addon-docs/blocks';
import { webLightTheme, FluentProvider } from '@fluentui/react-components';

interface FluentDocsContainerProps {
  children: React.ReactNode;
  context: DocsContextProps;
}

/**
 * A container that wraps storybook's native docs container to add extra components to the docs experience
 */
export const FluentDocsContainer = ({
  children,
  context,
}: FluentDocsContainerProps): React.ReactElement => {
  return (
    <FluentProvider
      className="sb-unstyled"
      style={{ backgroundColor: 'transparent' }}
      theme={webLightTheme}
    >
      <DocsContainer context={context}>{children}</DocsContainer>
    </FluentProvider>
  );
};
