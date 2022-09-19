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

    it ('Invalidando cadena con un genesis block corrupto',() =>{
        blockchain.blocks[0].data = 'h4ck-data';
        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Previous hash invalido');
    });
});
