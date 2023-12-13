module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  // ecmaFeatures: Đây là một đối tượng chứa các tính năng ECMAScript được hỗ trợ. Trong trường hợp này, { jsx: true } chỉ ra rằng cú pháp JSX (JavaScript XML) được hỗ trợ, giúp ESLint hiểu và kiểm tra mã JSX.
  // ecmaVersion: Đây là phiên bản ECMAScript mà mã nguồn của bạn tuân thủ. Trong ví dụ của bạn, 2020 cho biết mã nguồn được viết theo tiêu chuẩn ECMAScript 2020.
  // sourceType: Đây là loại mã nguồn được sử dụng trong dự án của bạn. Giá trị 'module' cho biết rằng mã nguồn của bạn sử dụng module ES (ECMAScript) để quản lý phạm vi và nhập/xuất.
  // project: Đây là đường dẫn tới tệp tsconfig.json của dự án TypeScript. Bằng cách chỉ định đường dẫn này, bạn cho phép ESLint sử dụng cấu hình TypeScript từ tệp tsconfig.json để hiểu và kiểm tra mã TypeScript trong dự án.
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-refresh', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/display-name': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'off',
      {
        assertionStyle: 'as' | 'angle-bracket',
        objectLiteralTypeAssertions: 'allow' | 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
      },
    ],
    '@typescript-eslint/unified-signatures': 'error',
  },
  // 'no-unused-vars': 'off': Tắt quy tắc ESLint mặc định no-unused-vars, không cảnh báo khi có biến không được sử dụng.
  // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]: Quy tắc này cảnh báo (warning) khi chỉ export các thành phần (components) trong React. Tùy chọn allowConstantExport: true cho phép export các hằng số.
  // 'react/react-in-jsx-scope': 'off': Tắt quy tắc cảnh báo khi sử dụng JSX mà không import React.
  // 'react/no-unescaped-entities': 'error': Quy tắc này báo lỗi (error) khi có các ký tự không được escape trong JSX.
  // 'react/no-unknown-property': 'error': Quy tắc này báo lỗi khi sử dụng các thuộc tính không hợp lệ trong JSX.
  // 'react/display-name': 'error': Quy tắc này báo lỗi khi các thành phần React không có displayName.
  // 'react-hooks/exhaustive-deps': 'warn': Quy tắc này cảnh báo (warning) khi useEffect không có danh sách phụ thuộc đầy đủ trong React Hooks.
  // 'react-hooks/rules-of-hooks': 'error': Quy tắc này báo lỗi khi không tuân thủ các quy tắc sử dụng React Hooks đúng cách.
  // '@typescript-eslint/no-unused-vars': 'off': Tắt quy tắc @typescript-eslint/no-unused-vars, không cảnh báo khi có biến TypeScript không được sử dụng.
  // '@typescript-eslint/no-unsafe-assignment': 'off': Tắt quy tắc @typescript-eslint/no-unsafe-assignment, không cảnh báo khi gán giá trị không an toàn trong TypeScript.
  // '@typescript-eslint/consistent-type-assertions': ['off', { ... }]: Tắt quy tắc @typescript-eslint/consistent-type-assertions, không cảnh báo khi sử dụng cách khai báo kiểu không nhất quán trong TypeScript.
  // '@typescript-eslint/no-redundant-type-constituents': 'error': Quy tắc này báo lỗi khi có các thành phần kiểu dữ liệu không cần thiết trong TypeScript.
  // '@typescript-eslint/naming-convention': 'off': Tắt quy tắc @typescript-eslint/naming-convention, không cảnh báo khi không tuân thủ quy tắc đặt tên trong TypeScript.
  // '@typescript-eslint/no-floating-promises': 'error': Quy tắc này báo lỗi khi có promise không được sử dụng hoặc không được xử lý trong TypeScript.
  // '@typescript-eslint/restrict-template-expressions': ['error', { ... }]: Quy tắc này báo lỗi khi sử dụng các biểu thức không an toàn trong template literals trong TypeScript.
  // '@typescript-eslint/unified-signatures': 'error': Quy tắc này báo lỗi khi có các chữ ký không nhất quán trong TypeScript.
}
