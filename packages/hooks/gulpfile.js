const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const fs = require('fs');
const fse = require('fs-extra');
const fg = require('fast-glob');
const gm = require('gray-matter');
const { async } = require('fast-glob');

// 获取 hooks/src/**/index.md 中描述内容
async function genDesc(mdpath) {
  if (!fs.existsSync(mdpath)) {
    return;
  }
  const mdFile = fs.readFileSync(mdpath, 'utf-8');
  const { content } = gm(mdFile);
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}

// 将 hooks/src/**/index.md 中的meta信息写入到文件中 => metadata.json
// 其中每项内容是 { name: '', description: '' }, name 即是我们的 hooks 名称，如 useToggle, description
// 即是 hooks 下的 index.md 里面的 # useToggle 下面的描述内容。
async function genMetaData() {
  const metaData = {
    functions: [],
  };
  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await genDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metaData.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });
  return metaData;
}

gulp.task('metadata', async function () {
  const metaData = await genMetaData();
  await fse.writeJson('metadata.json', metaData, { spaces: 2 });
});

exports.default = gulp.series(commonConfig.default, 'metadata');
