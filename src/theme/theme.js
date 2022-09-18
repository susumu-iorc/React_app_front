import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    // グローバルなテーマの上書き、追加
    global: {
      body: {
        // bodyに指定したいstyle
        backgroundColor: "gray.50",
        color: "gray.800",
      },
      p: {
        // mdを境に、PCとSP表示を切り替える
        fontSize: { base: "md", md: "lg" },
        // 文字列の行の間隔
        lineHeight: "tall",
      },
    },
  },
});

export default theme;