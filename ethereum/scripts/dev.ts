import childProcess from "child_process";

const ganache = childProcess.spawn("yarn", ["launch"]);

childProcess.spawn("yarn", ["deploy"]);
ganache.stdout.pipe(process.stdout);
ganache.stderr.pipe(process.stderr);

