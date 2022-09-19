import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;
console.log(`${name} v${version}`);

const {genesis} = Block;
console.log(genesis.toString());
const block1 = Block.mine(genesis, 'trasact1');
console.log(block1.toString());

const block = Block.mine(genesis, 'd4t4-bn');
console.log(block.toString());

const block2 = Block.mine(block, 'd4t4-2');
console.log(block2.toString());

/*const block = new Block(Date.now(), genesis.hash,'h4sh', 'd4ta');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh-block2', 'd4ata-2');
console.log(block2.toString());
*/


