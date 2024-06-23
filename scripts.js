document.querySelector('.connect-wallet').addEventListener('click', () => {
  alert('Connect wallet functionality to be implemented');
});
const walletInfo = await magic.user.getInfo();
const walletType = walletInfo.walletType;

if (walletType === "magic") {
  await magic.wallet.showUI();
};
