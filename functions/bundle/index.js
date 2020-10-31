"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createLocalServer } = require("./server");
const server = createLocalServer();
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map