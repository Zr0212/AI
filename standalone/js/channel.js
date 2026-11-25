/**
 * standalone/js/channel.js
 * Kenh dong bo hai chieu giua Man hinh Giao vien va Man hinh May chieu
 * khong can mang LAN, khong can WebSocket, khong can internet.
 * Ho tro ca BroadcastChannel API va localStorage fallback.
 */

(function(global) {
  const CHANNEL_NAME = 'lan_slides_standalone_channel';
  const STORAGE_KEY = 'lan_slides_standalone_event';

  class StandaloneChannel {
    constructor() {
      this.listeners = new Map();
      this.hasBroadcast = typeof BroadcastChannel !== 'undefined';
      this._senderId = 'sender_' + Math.random().toString(36).substring(2, 9);
      this._seenIds = new Set();

      if (this.hasBroadcast) {
        try {
          this.bc = new BroadcastChannel(CHANNEL_NAME);
          this.bc.onmessage = (event) => {
            this._handleMessage(event.data);
          };
        } catch (e) {
          this.hasBroadcast = false;
        }
      }

      if (typeof window !== 'undefined') {
        window.addEventListener('storage', (e) => {
          if (e.key === STORAGE_KEY && e.newValue) {
            try {
              const data = JSON.parse(e.newValue);
              if (data && data._sender !== this._senderId) {
                this._handleMessage(data);
              }
            } catch (err) {
              // Bo qua loi parse JSON
            }
          }
        });
      }
    }

    send(type, payload = {}) {
      const message = {
        type,
        payload: payload || {},
        _sender: this._senderId,
        _id: this._senderId + '_' + Date.now() + '_' +
             Math.random().toString(36).substring(2, 8),
        _t: Date.now()
      };

      if (this.hasBroadcast && this.bc) {
        try {
          this.bc.postMessage(message);
        } catch (e) {
          // Bo qua loi postMessage
        }
      }

      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
        } catch (e) {
          // Bo qua quota exceeded
        }
      }
    }

    post(type, payload = {}) {
      this.send(type, payload);
    }

    on(type, callback) {
      if (!this.listeners.has(type)) {
        this.listeners.set(type, new Set());
      }
      this.listeners.get(type).add(callback);
    }

    off(type, callback) {
      if (this.listeners.has(type)) {
        this.listeners.get(type).delete(callback);
      }
    }

    _handleMessage(data) {
      if (!data || !data.type) return;
      if (data._id) {
        if (this._seenIds.has(data._id)) return;
        this._seenIds.add(data._id);
        if (this._seenIds.size > 120) {
          const first = this._seenIds.values().next().value;
          this._seenIds.delete(first);
        }
      }
      const callbacks = this.listeners.get(data.type);
      if (callbacks) {
        callbacks.forEach((cb) => {
          try {
            cb(data.payload || {});
          } catch (err) {
            console.error('[Channel] Loi callback:', err);
          }
        });
      }
    }

    close() {
      if (this.bc) {
        try {
          this.bc.close();
        } catch (e) {}
      }
    }
  }

  global.StandaloneChannel = StandaloneChannel;
})(typeof window !== 'undefined' ? window : globalThis);
