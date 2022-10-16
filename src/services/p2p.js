import WebSocket from "ws";

const peers = PEERS ? PEERS.split(',') : [];

const {P2P_PORT = 5000, PEERS} = process.env;

class P2PService 
{

    constructor(blockchain)
    {
        this.blockchain = blockchain;
        this.sockets = [];
    }


    listen() 
    {
        const server = new WebSocket.Server({port: P2P_PORT});
        server.on('connection', (socket) => this.onConnection(socket));

        peers.forEach((peer) => 
        {
            const socket = new WebSocket(peer);

            socket.on('open', () => this.onConnection(socket));

        });


        console.log(`Service ws:${P2P_PORT} escchando...`);
    }

    onConnection(socket) 
    {
        console.log('[ws:socket] conected.');
        this.sockets.push(socket);
    }
} export default P2PService;