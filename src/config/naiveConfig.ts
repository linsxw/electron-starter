export const naiveThemeConfig = computed<GlobalThemeOverrides>(() => {
  return {
    common: {
      borderRadius: '3px',
      fontSizeMedium: '12px',
      heightMedium: '30px',
      fontFamily: 'HarmonyOS_Sans_SC_Medium',
    },
    Message: {
      padding: '8px 14px',
      fontSize: '14px',
    },
  }
})
