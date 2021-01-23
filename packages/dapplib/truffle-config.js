require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike crawl range purchase install civil army genius'; 
let testAccounts = [
"0x3232050e65fc9671590693a26b390ec13adc86bbff2e41f51380a68ec45f6d8e",
"0x9a74c2dc99001fae445f678a14f8f22c48234df3e9b8c02e54ac6e54ee304b13",
"0xd3e2e4fc0aeb4cc8df7c958c7234e01279c7e41448ab04b23478ff3b0d9ea839",
"0xf9eb2f95534e5e89d6478a2b0077aa30b1f7079c193922a887a71ca1deda85c4",
"0xb73e766dcd69007ee49965811f27967da1cb79c838c705af54269793d05b6c19",
"0xaa617d1cb4913412fc04e54e13032cfbfa7d791cfeef8db4e73621a55209b3c2",
"0x13713993109a94054b9d3ca0491eceda09e26f2115007d0db00e27bbf79608c3",
"0xfbffe01ca9b0a81cbf740c4565561465ea92ff59df39bea1f8737c464f67814a",
"0x370c299cb358fd26fbefd71e8466a8f93c5d984c999d40b0b3dbf814095a46ef",
"0x77f11a31bdff26221519ac070349007529d539fd39810022fd8c31b390da218b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
