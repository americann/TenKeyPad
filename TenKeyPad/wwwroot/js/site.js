// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    $("#defaultKeypad").keypad({
        keypadOnly: false,
    });
    $('#defaultKeypadd').keypad();

});

//DevTools failed to load SourceMap: Could not load content for https://localhost:44393/js/jquery.plugin.min.map:
// HTTP error: status code 404, net:: ERR_HTTP_RESPONSE_CODE_FAILURE