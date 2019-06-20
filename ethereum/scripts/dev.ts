import childProcess from "child_process";

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

async function start() {
  const ganache = childProcess.spawn("yarn", ["launch"]);
  ganache.stdout.pipe(process.stdout);
  ganache.stderr.pipe(process.stderr);

  await sleep(3000)
  childProcess.spawn("yarn", ["deploy:test"]);
}

start()
