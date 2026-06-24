import * as esbuild from "esbuild";

const serve = process.argv.includes("--serve");

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["src/index.ts"],
  outfile: "dist/eink-dashboard-cards.js",
  bundle: true,
  format: "esm",
  target: "es2020",
  sourcemap: serve,
  minify: !serve,
  legalComments: "none",
  banner: { js: "/* eink-dashboard-cards — built by esbuild */" },
};

if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: ".", port: 8000 });
  console.log(`\n  Dev harness → http://localhost:${port}/dev/\n  (watching src/ for changes)\n`);
} else {
  await esbuild.build(options);
  console.log("Built dist/eink-dashboard-cards.js");
}
