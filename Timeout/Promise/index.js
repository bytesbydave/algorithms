async function waitForDelay(ms) {
  await delay(ms);
  console.log(`delayed after ${ms} seconds`);
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

waitForDelay(2000);
