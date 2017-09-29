import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';

import { FirebaseAuth } from './firebase';

const networkInterface = createBatchingNetworkInterface({
    uri: 'http://localhost:4500/graphql'
});

networkInterface.use([{
    async applyBatchMiddleware(req, next) {
        if (req.requests[0].operationName === 'addUser') {
            return next();
        }
        if (!req.options.headers) {
            req.options.headers = {}; // Create header object if needed
        }
        const token = await FirebaseAuth.currentUser.getIdToken(true);
        req.options.headers.Authorization = token;
        return next();
    }
}]);

const client = new ApolloClient({ networkInterface, connectToDevTools: true });

export default client;
