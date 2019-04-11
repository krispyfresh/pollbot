module.exports = function (context, data) {
    context.log(data);

    // Check if we got first/last properties
    else {
        context.res = {
            status: 400,
            body: { error: 'Please pass first/last properties in the input object'}
        };
    }

    context.done();
}
