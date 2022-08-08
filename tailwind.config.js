
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
		  colors:{
				  'light-grey':'#959292',
          'shape-grey':'#C4C4C4',
          'bg-final':'#707070',
		  },
      rotate:{
        '15': '-15deg',
        '49':'-49deg',
      },
      fontSize:{
        '10xl':'200px',
      },
      borderRadius:{
        'superlarge':'300px',
      },
      width:{
        'shape-big':'1397px'
      },
      margin:{
        'big-shape':'-410px'
      },
      height:{
        'shape-big':'623px',
      },
	  },
  },
  plugins: [],
}
