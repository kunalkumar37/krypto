// https://eth-rinkeby.alchemyapi.io/v2/y712KAKd1g-KN9S7sUFvV2dZeGn8ud7B
// 9ac4029051dd2ee3c17da125eee7751c0c5e77b6c96cd0da6cc2e6cadf8be91b
require('@nomiclabs/hardhaat-waffle');
module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/y712KAKd1g-KN9S7sUFvV2dZeGn8ud7B',
      accounts:['9ac4029051dd2ee3c17da125eee7751c0c5e77b6c96cd0da6cc2e6cadf8be91b']
    }
  }
}