// src/css-modules.d.ts

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

// src/types/particles.d.ts
declare module 'particles.js' {
  const particlesJS: any;
  export default particlesJS;
}

