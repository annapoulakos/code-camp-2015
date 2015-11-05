import Utilities from './utilities';

class Channel {
    constructor (channel) {
        this.name = channel;
        this.topics = {};
    }

    Publish (topic, data = {}) {
        if (topic === '*') {
            this.PublishAll(data);
        }

        if (topic in this.topics) {
            this.topics[topic]
                .sort((a,b) => b.priority - a.priority)
                .forEach(elem => {
                    elem.callback(data);
                });
        }

        return this;
    }

    Subscribe (topic, callback = Utilities.noop, priority = 0) {
        var guid = Utilities.Guid();

        if (topic === '*') {
            return this.SubscribeAll(callback, priority);
        } else {
            if (!(topic in this.topics)) {
                this.topics[topic] = {};
            }
        }

        if (!(guid in this.topics[topic])) {
            this.topics[topic][guid] = [];
        }

        this.topics[topic][guid].push({
            callback: callback,
            priority: priority,
            timestamp: Date.now(),
            topic: topic
        });

        return guid;
    }

    Unsubscribe (topic, guid) {
        if (!(topic in this.topics) || !(guid in this.topics[topic])) {
            return;
        }

        delete this.topics[topic][guid];

        return this;
    }

    PublishAll (data) {
        this.topics.forEach(topic => {
            this.publish(topic, data);
        });
    }

    SubscribeAll (callback = Utilities.noop, priority = 0) {
        return this.topics.map(topic => this.Subscribe(topic, callback, priority));
    }
}

export default Channel;
