# How to run

1. `pnpm install`
1. `pnpm build`
1. `pnpm start`

## Result

![result](./result.png)

Logs with all the log types enabled are available [here](./log.txt).

## Notes

Interestingly, removing the empty object from the first method call causes a different error,
likely at the error logging stage, given that the `deleteMany()` parameter is optional

<details>

<summary>See logs</summary>

```
prisma:info Starting a sqlite pool with 17 connections.
prisma:query BEGIN
prisma:query ROLLBACK
prisma:error Cannot convert undefined or null to object
prisma:error
Invalid `prisma.model2.create()` invocation:

{
  data: {
    field2: "value",
    faultyField: "value"
    ~~~~~~~~~~~
  }
}

Unknown argument `faultyField`. Available options are listed in green.
prisma:error
Invalid `prisma.model1.create()` invocation:

{
  data: {
    field: "value",
?   field2?: String
  }
}

Unknown argument `faultyField`. Available options are listed in green.
C:\[REDACTED]\prisma-wrong-method-in-error-in-transaction\node_modules\.pnpm\@prisma+client@5.2.0_prisma@5.2.0\node_modules\@prisma\client\runtime\library.js:28
[REDACTED]

TypeError: Cannot convert undefined or null to object
```

</details>
