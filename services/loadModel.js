const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/mybucket-model/model/model.json');
}
module.exports = loadModel;