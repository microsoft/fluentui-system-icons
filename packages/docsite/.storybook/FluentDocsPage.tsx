import * as React from 'react';
import {
  DocsContext,
  ArgTypes,
  Description,
  Stories,
  type DocsContextProps,
} from '@storybook/addon-docs/blocks';
import type {
  SBEnumType,
  PreparedStory,
  Renderer,
} from '@storybook/types';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { InfoFilled } from '@fluentui/react-icons';
import { Toc } from './Toc';

type PrimaryStory = PreparedStory<Renderer>;

const useStyles = makeStyles({
  divider: {
    height: '1px',
    backgroundColor: '#e1dfdd',
    ...shorthands.border('0px', 'none'),
    ...shorthands.margin('48px', '0px'),
  },
  wrapper: {
    display: 'flex',
    ...shorthands.gap('16px'),
  },
  toc: {
    flexBasis: '200px',
    flexShrink: 0,
    [`@media screen and (max-width: 1000px)`]: {
      display: 'none',
    },
  },
  container: {
    // without a width, this div grows wider than its parent
    width: '200px',
    flexGrow: 1,
  },
  globalTogglesContainer: {
    columnGap: tokens.spacingHorizontalXXXL,
    display: 'flex',
  },
  description: {
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
  },
  nativeProps: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,

    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingHorizontalM,
    margin: `0 ${tokens.spacingHorizontalM}`,
  },
  nativePropsIcon: {
    alignSelf: 'center',
    color: tokens.colorBrandForeground1,
    fontSize: '24px',
  },
  nativePropsMessage: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
});

const getNativeElementsList = (elements: SBEnumType['value']) => {
  const elementsArr = elements.map((el, idx) => [
    <code key={idx}>{`<${el}>`}</code>,
    idx !== elements.length - 1 ? ', ' : ' ',
  ]);

  return (
    <>
      {elementsArr}
      {elementsArr.length > 1 ? 'elements' : 'element'}
    </>
  );
};

const RenderArgsTable = ({
  hideArgsTable,
  primaryStory,
}: {
  primaryStory: PrimaryStory;
  hideArgsTable: boolean;
}) => {
  const styles = useStyles();
  return hideArgsTable ? null : (
    <>
      <ArgTypes />
      {primaryStory.argTypes.as &&
        primaryStory.argTypes.as?.type?.name === 'enum' && (
          <div className={styles.nativeProps}>
            <InfoFilled className={styles.nativePropsIcon} />
            <div className={styles.nativePropsMessage}>
              <b>
                Native props are supported <span role="presentation">🙌</span>
              </b>
              <span>
                All HTML attributes native to the{' '}
                {getNativeElementsList(primaryStory.argTypes.as.type.value)},
                including all <code>aria-*</code> and <code>data-*</code>{' '}
                attributes, can be applied as native props on this component.
              </span>
            </div>
          </div>
        )}
    </>
  );
};

export const FluentDocsPage = (): React.ReactElement => {
  const context = React.useContext(DocsContext);
  const stories = context.componentStories();
  const primaryStory = stories[0];
  const primaryStoryContext = context.getStoryContext(primaryStory);

  assertStoryMetaValues(primaryStory);

  const hideArgsTable = Boolean(
    primaryStoryContext.parameters?.docs?.hideArgsTable
  );

  const styles = useStyles();

  return (
    <div className="sb-unstyled">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Description />
          <RenderArgsTable
            primaryStory={primaryStory}
            hideArgsTable={hideArgsTable}
          />
          <Stories title="Examples" />
        </div>
        <div className={styles.toc}>
          <Toc stories={stories} />
        </div>
      </div>
    </div>
  );
};

function assertStoryMetaValues(
  story: ReturnType<DocsContextProps['componentStories']>[number]
) {
  if (story.component === null) {
    throw new Error(
      [
        'Invalid Story Meta declaration:',
        `- primaryStory.component of componentId:${story.componentId} is "null"`,
        '- to resolve this error, please update "component" property value in your story definition to reference a React Component or remove it if it is not needed.',
      ].join('\n')
    );
  }
}
