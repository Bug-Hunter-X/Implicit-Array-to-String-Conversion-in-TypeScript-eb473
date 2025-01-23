# Implicit Array to String Conversion in TypeScript

This repository demonstrates a subtle bug in TypeScript where an array is implicitly converted to a string when passed to a function expecting a string.  This can lead to unexpected behavior and hard-to-debug errors.

The `bug.ts` file contains the code exhibiting the issue. The `bugSolution.ts` file shows how to fix this problem by explicitly enforcing type checking.