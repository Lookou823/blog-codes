class RemoveConsolePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "RemoveConsolePlugin",
      (compilation, callback) => {
        Object.keys(compilation.assets).forEach((filename) => {
          // 仅处理 .js 文件
          if (filename.endsWith(".js")) {
            const asset = compilation.assets[filename];
            let content = asset.source();

            // 使用正则表达式移除整个 console.log 语句
            // 匹配 console.log( 之后的任意字符，直到遇到闭合的括号
            const consoleLogRegex = new RegExp(
              "console\\.log\\(.*?\\)(,|$)",
              "g"
            );

            const withoutConsole = content.replace(consoleLogRegex, "");

            // 更新资源
            compilation.assets[filename] = {
              source: () => withoutConsole,
              size: () => Buffer.byteLength(withoutConsole, "utf8"),
            };
          }
        });

        callback();
      }
    );
  }
}

module.exports = RemoveConsolePlugin;
