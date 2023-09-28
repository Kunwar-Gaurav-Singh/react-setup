console.log("test");

// test - 28th sep 16:15 

const ref = window.console.log;

window.console.log = function(log) {
    const date = new Date();
    ref(log, date);
}
