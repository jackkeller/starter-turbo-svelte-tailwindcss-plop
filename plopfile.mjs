export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // app generator
  plop.setGenerator('app', {
    description: 'Plop a New Application into your repo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Application name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Application description?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: './apps/{{lowerCase name}}',
        base: '.templates/app',
        templateFiles: ['.templates/app/**/*', '.templates/app/.*'],
        data: {
          pwPort: Math.floor(Math.random() * 1000) + 4000
        }
      },
      ({ name }) =>
        `\n\n 🎉\n\n 🌟 ${name} app generated!\n\nDon't forget to run pnpm install!\n\n 🎉\n\n`
    ]
  });

  // Helpers
  plop.setHelper('createPortNumber', function () {
    return Math.floor(Math.random() * 1000) + 4000;
  });

  // Case Modifiers
  // camelCase: changeFormatToThis
  // snakeCase: change_format_to_this
  // dashCase/kebabCase: change-format-to-this
  // dotCase: change.format.to.this
  // pathCase: change/format/to/this
  // properCase/pascalCase: ChangeFormatToThis
  // lowerCase: change format to this
  // sentenceCase: Change format to this,
  // constantCase: CHANGE_FORMAT_TO_THIS
  // titleCase: Change Format To This
}
