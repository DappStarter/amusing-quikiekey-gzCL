require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note shift pudding hidden enroll food skirt'; 
let testAccounts = [
"0x95dc3a89b2597209e4fa2ad486da0f7c8f6432024b3bc5d93d63193a459c0c0c",
"0xbfc9d47e4c32ffc5574fef7506b04fc669b848cce037b4459cb6604f1c1b9276",
"0x54df65793b400f05861842bef6c063db24bd4cdd5d710bc06d8c1614e9401666",
"0xb349ed77211a0c0d70ebc2f726bf9d5839260144b51e926b774ccb1fde0ed223",
"0x4c7fa555246b63e0cd9d3b9b8c12e67ff09c10fd127c02330eda0618283448c6",
"0x07f2832e912c2a2b4f056106f96923fee2da883b70d2d910ef7b058f3093438e",
"0x3c4161e929363570282d27e60a3df0d959d8948e46eff9522a51d639ce2564bf",
"0x6864cc65d298801aa280f82440e7a088ce845e34ad9e1866f1c719e3f1723abc",
"0x0a8730cffeac68c5c76fcb992780c8698cf3ec9450e513d96e4b778cdf83b51e",
"0xf06bbbefbd11caf3f56a4e3848bd007bf202d85c99fc2c0567ec28f361fec9a5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

