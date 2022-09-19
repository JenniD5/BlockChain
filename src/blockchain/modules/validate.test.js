import Blockchain from '../blockchain';
import validate from './validate';

describe ('validate()', () =>{
    let blockchain;

    beforeEach(()=>{
        blockchain = new Blockchain();

    });

    it ('Crear cadena valida',()=>{
        blockchain.addBlock('transact0');
        blockchain.addBlock('transact1');

        expect(validate(blockchain.blocks)).toBe(true);
    });
});
