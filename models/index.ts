import * as mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/cnodejs_data', {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        console.error('connect mongodb error:', err)
        process.exit(1);
    }
});

// models
export const Article = require('./article');