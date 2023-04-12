import { mode } from "@chakra-ui/theme-tools";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "gray.900")(props),
        fontFamily: inter.style.fontFamily,
      },
      html: {
        fontFamily: inter.style.fontFamily,
      },
    }),
  },
};
