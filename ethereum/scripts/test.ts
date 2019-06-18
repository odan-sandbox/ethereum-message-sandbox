import childProcess from "child_process";

const ganache = childProcess.spawn("yarn", ["launch"]);

const test = childProcess.spawn("yarn", ["test:sol"]);
test.stdout.pipe(process.stdout);
test.stderr.pipe(process.stderr);
test.on("exit", code => {
  ganache.kill();
  process.exit(code!);
});
