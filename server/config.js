const PERSISTENCE_TYPES = {
  TYPE_MEMORY: 'MEMORY',
  TYPE_FILE: 'FILE',
  TYPE_MONGODB: 'MONGODB',
};

const config = {
  PORT: 5000,
  PERSISTENCE_TYPE: PERSISTENCE_TYPES.TYPE_MONGODB,
  MONGODB_CONNECTION_STR: 'mongodb+srv://simulacionc16-08:C2u4D94BzKGwdwqu@clusterc16-08.nikn2b0.mongodb.net/simulacionc16-08-db?retryWrites=true&w=majority',
  MONGODB_CONNECTION_TIMEOUT: 2000,   // Valor bajo para TESTING
};

export {PERSISTENCE_TYPES, config as default};