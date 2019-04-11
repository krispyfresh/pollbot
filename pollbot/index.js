module.exports = function (context, data) {
    context.log("You sent the message: " + data.body.message.text);


    context.done();
}
