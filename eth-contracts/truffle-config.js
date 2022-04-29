/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "cbc62d5af91146aeafc46617b71e4849";
const mnemonic = "exit baby admit practice own road muffin slot kind bless chase roof";

const hd = new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`);
console.log('your address ', hd.addresses)

module.exports = {
    networks: {
        development: {
            //provider: () => new HDWalletProvider(localMnemonic, `http://127.0.0.1:8545/`, 0, 20),
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id
            //gas: 4500000,
        },
        // Useful for deploying to a public network.
        // NB: It's important to wrap the provider as a function.
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
            network_id: 4,       // rinkeby's id
            //gas: 4500000,        // rinkeby has a lower block limit than mainnet
            //gasPrice: 10000000000,
            gas: 6500000,
            gasPrice: 20000000000
        }
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "^0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: true,  // Default: false
            //    runs: 200 // Default: 200
            //  },
            //  evmVersion: "byzantium"
            //}
        }
    }
};