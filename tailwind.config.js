module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/img/bubbles.svg')"
      }),
      colors: {
        'primary': '#4F46E5',
        'secondary': '6C6C6C'
      }
    }
  }
}