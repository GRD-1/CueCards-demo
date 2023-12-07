// Файл создан на основе @commitlint/config-conventional

module.exports = {
  rules: {
    // Тело коммита должно начинаться с пустой строки
    'body-leading-blank': [2, 'always'],

    // Нижний колонтитул коммита должен начинаться с пустой строки
    'footer-leading-blank': [2, 'always'],

    // Максимальная длина заголовка 72 символа
    'header-max-length': [2, 'always', 72],

    // Область всегда только в нижнем регистре
    'scope-case': [2, 'always', 'lower-case'],

    // Описание не может быть пустым
    'subject-empty': [2, 'never'],

    // Описание не должно заканчиваться '.'
    'subject-full-stop': [2, 'never', '.'],

    // Тип всегда только в нижнем регистре
    'type-case': [2, 'always', 'lower-case'],

    // Тип не может быть пустым
    'type-empty': [2, 'never'],

    // Правила для commitlint и commitizen нужно настраивать и для  commitlint-action,
    // но они настраиваются только через commitlint.config.js, который должен лежать в корне,
    // поэтому отдельно настраивать правила нет смысла, пользуемся регламентом Conventional Commits (как здесь)
    'type-enum': [
      2,
      'always',
      ['break', 'build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'chore']
    ]
  }
};
