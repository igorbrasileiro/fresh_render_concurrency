# Concurrency bug
To reproduce the bug run this:
1. install k6
2. run `deno task start`
3. run `k6 run script.js & k6 run script_2.js &`
4. open the browser with `http://localhost:8000/admin/demo`

## Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
