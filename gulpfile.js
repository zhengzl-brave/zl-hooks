const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

// 实现clean
gulp.task('clean', async function () {
  // 删除产出
  await del('dist/**');
  await del('lib/**');
  await del('es/**');
});

// 实现 esm 产物，需将 ts -> js,用到 gulp-typescript
// ts -> js exnext -> es babel js combiler
gulp.task('esm', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  // src 将文件创建为可读流，pipe 中传入一个 function， 这个函数作用是接收上一个流的结果返回一个 stream 对象
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 实现 cjs 产物
gulp.task('cjs', function () {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        // babel 配置 preset, 注意，我们这里其实上是最终在 hooks 子包中应用的，也就是我们run build 执行的是 子包的 gulp
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

// 实现 d.ts 类型声明
gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true, // 只导出 d.ts 不导出 .js 文件
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

// readme
gulp.task('copyReadme', async function () {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

// 任务的串联
exports.default = gulp.series('clean', 'esm', 'cjs', 'declaration', 'copyReadme');
