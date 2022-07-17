const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (connError, connection) => {
    if(connError){
        throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if(channelError){
            throw channelError;
        }
        const QUEUE = 'codingtest';
        const msg = 'Hello from RabbitMQ!';

        channel.assertQueue(QUEUE);
        channel.sendToQueue(QUEUE, Buffer.from(msg));
        console.log(" [x] Sent '%s'", msg);
    })
})