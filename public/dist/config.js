self.__uv$config = {
    prefix: '/network/',
    bare: '/bare/',
    encodeUrl:  Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/dist/handler.js?v=4',
    bundle: '/dist/bundle.js?v=4',
    config: '/dist/config.js?v=4',
    sw: '/dist/sw.js?v=4',
};