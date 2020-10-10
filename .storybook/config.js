import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { defaultTheme } from '../src/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

addDecorator(story => {
return <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
});

const req = requireContext('../src', true, /\.story\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
