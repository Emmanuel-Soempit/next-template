import { MantineThemeOverride} from "@mantine/core";
import buttonClasses from '@/css/theme/buttonclasses.module.css'
import textClasses from '@/css/theme/textclasses.module.css'
import themeIconClasses from '@/css/theme/themeiconclasses.module.css'

export const MantineThemeConfig: MantineThemeOverride = {
  components: {
    Button: {
      classNames: buttonClasses,
    },
    TextInput: {
        classNames: textClasses
    },
    ThemeIcon: {
      classNames: themeIconClasses
    }
  },
};
