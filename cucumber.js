// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ts-node').register({
    transpileOnly: true,
    require: ['tsconfig-paths/register'],
    compilerOptions: {
      module: 'commonjs',
      resolveJsonModule: true,
      baseUrl: './',
      target: 'es5',
      jsx: 'react',
      paths: {
      },
      allowJs: true,
      noEmit: false,
      noEmitOnError: false,
      isolatedModules: false,
      esModuleInterop: true,
      noImplicitAny: false,
      strictNullChecks: true,
      skipLibCheck: true
    }
  });
  
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
  
  const IS_DEV = process.env.NODE_ENV === 'development';
  const FAIL_FAST = IS_DEV ? ['--fail-fast'] : [];
  const FORMAT =
    process.env.CI || !process.stdout.isTTY
      ? 'progress'
      : './node_modules/@cucumber/pretty-formatter';
  const FORMAT_OPTIONS = JSON.stringify({ colorsEnabled: true });
  
  module.exports = {
    default: [
      '--publish-quiet',
      ...FAIL_FAST,
      `--format ${FORMAT}`,
      `--format-options ${FORMAT_OPTIONS}`,
      '--require-module jsdom-global/register',
      '--require-module @babel/register',
      '--require-module expect',
      //'--require-module babel-plugin-module-resolver',
      //'--require-module mutationobserver-shim',
 
      // Test
      '--require ./Features/StepDefinitions/*/*.js',
      '--require ./Features/StepDefinitions/*.js',
      '--require ./Features/StepDefinitions/**/*.js',
      '--require ./Features/Support/*.js',
  
    ].join(' ')
  };
  