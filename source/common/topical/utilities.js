class Utilities {
    static noop () {}

    static ParseTopic (topic) {
        let tokens = topic.split('.');
        if (tokens.length === 1) {
            tokens.unshift('_default');
        }

        return tokens;
    }

    static Guid () {
        var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
            _ = (x) => {
                var n = Math.random()*16|0,
                    r = x === 'x'? n: n&0x3|0x8;
                return r.toString(16);
            },
            gen = () => {
                return guid.replace(/[xy]/g, _);
            };
        return gen();
    }
}

export default Utilities;
