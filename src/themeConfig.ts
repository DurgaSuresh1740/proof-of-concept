// themeConfig.ts
export const customTheme = {
  token: {
    colorPrimary: '#1677ff',
    colorBgLayout: '#f0f2f5',
    borderRadius: 8,
    loginCardBg: '#ffffff',        // custom token
    loginCardWidth: '400px',       // custom token
    loginCardPadding: '24px',      // custom token
    loginCardShadow: '0 4px 12px rgba(0,0,0,0.1)', // custom token
  },
};

// themeTokens.ts
export const loginPageTokens = {
  loginCardWidth: '400px',
  loginwidth : '100vw',
  loginCardPadding: '24px',
  loginCardBg: '#ffffff',
  loginCardShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',

};

export const centerItems = {
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width : '100vw'
}

export const lightTheme = {
  token: {
    colorPrimary: '#1677ff',
    colorBgLayout: '#f0f2f5',
    colorText: '#000000',
    colorTextSecondary: '#595959',
    colorBorder: '#d9d9d9',
    colorBgContainer: '#ffffff',
    borderRadius: 8,
    loginCardBg: '#ffffff',
    loginCardShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
};

export const darkTheme = {
  token: {
    colorPrimary: '#177ddc',
    colorBgLayout: '#141414',
    colorText: '#ffffff',
    colorTextSecondary: '#bfbfbf',
    colorBorder: '#434343',
    colorBgContainer: '#1f1f1f',
    borderRadius: 8,
    loginCardBg: '#1f1f1f',
    loginCardShadow: '0 4px 12px rgba(255, 255, 255, 0.08)',
  },
};
