import { ethers } from "ethers";
async function yo() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545"
  );
  // MetaMask requires requesting permission to connect users accounts
  //await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  //const signer = provider.getSigner()
  const nat = await provider.getBlockNumber();
  console.log(nat + "");
  document.getElementById("block").innerHTML = nat;
  console.log("hooray");
}
let timeout;

//function myFunction() {
timeout = setTimeout(alertFunc, 10000);
//}

function alertFunc() {
  yo();
}
