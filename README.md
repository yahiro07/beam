Utilities for my projects.
For the projects with vite, typescript, react, solid, and webaudio.

I did't published the packages to npm since they're tied to my specific app targets.
It can be referenced by specifying github repository dependency specification.
for example, in package.json
```
  dependencies: {
    "beams": "github:yahiro07/beam#0.2.0",
  }
```

It's supposed to be imported from vite and typescript with esm, other environments are not considered.
