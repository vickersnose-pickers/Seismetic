//XOR is ass
self.__dynamic$config = {
    prefix: '/adventuring/',
    encoding: 'xor',
    mode: 'production', 
    logLevel: 0, 
    bare: {
      version: 2, 
      path: '/bare/',
    },
    tab: {
      title: 'travis sccott',
      icon: null,
      ua: null,
    },
    assets: {
      prefix: '/dynamic/',
      files: {
        handler: 'dynamic.handler.js',
        client: 'dynamic.client.js',
        worker: 'dynamic.worker.js',
        config: 'dynamic.config.js',
        inject: null,
      }
    },
    block: [
    
    ]
  };