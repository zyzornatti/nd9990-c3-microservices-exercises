const FAVORITE_NAME = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    //console.log('Containers rule!');
	console.log(FAVORITE_NAME+' rules!');
    await sleep(5000);
  }
}

main();
