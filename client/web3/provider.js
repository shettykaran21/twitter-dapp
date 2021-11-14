export const provider = () => {
  if (typeof window.ethereum !== 'undefined') {
    return window.ethereum
  } else {
    console.error('You need to install MetaMask for this app to work!')
  }
}
