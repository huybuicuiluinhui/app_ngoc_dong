module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  },
  theme: {
    extend: {
      colors:{
        bg:"#F7F7F7",
        main:'#191E6F'
      }
    },
  },
};
