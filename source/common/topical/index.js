import Channel from './channel';
import Utilities from './utilities';

let channels = {};

class Topical {
    static Channel (channel) {
        if (!(channel in channels)) {
            channels[channel] = new Channel(channel);
        }

        return channels[channel];
    }

    static Publish (topic, data = {}) {
        var [channel, name] = Utilities.ParseTopic(topic);
        return Topical.Channel(channel).Publish(name, data);
    }

    static Subscribe (topic, callback = Utilities.noop, priority = 0) {
        var [channel, name] = Utilities.ParseTopic(topic);
        return Topical.Channel(channel).Subscribe(name, callback, priority);
    }

    static Unsubscribe (topic, guid) {
        var [channel, name] = Utilities.ParseTopic(topic);
        return Topical.Channel(channel).Unsubscribe(name, guid);
    }
}

window.topical = window.topical || Topical;

export default Topical;
