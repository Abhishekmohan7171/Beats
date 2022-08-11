
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
        'shape-big':'1397px',
        'image-xl':'605px',
        'image-m':'405px',
        'image':'305px',
        'imagetwo-xl':'490px',
        'imagetwo-m':'390px',
        'imagetwo':'290px',
      },
      height:{
        'image-xl':'886px',
        'image-m':'686px',
        'image':'586px',
        'imagetwo-xl':'490px',
        'imagetwo-m':'390px',
        'imagetwo':'290px',
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
