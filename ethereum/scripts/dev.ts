import childProcess from "child_process";

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

async function start() {
  const ganache = childProcess.spawn("yarn", ["launch"]);
  ganache.stdout.pipe(process.stdout);
  ganache.stderr.pipe(process.stderr);

  await sleep(3000)

  const deploy = childProcess.spawn("yarn", ["deploy"]);
  // deploy.stdout.pipe(process.stdout);
  // deploy.stderr.pipe(process.stderr);
}

start()
