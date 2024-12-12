export const endpoint = 'https://order-sg.codashop.com/initPayment.action';

export const allowedMethod = ['GET', 'HEAD'];

export function getUrl(request) {
  return new URL(request.url);
}

export function timeNow() {
  return Date.now();
}

export const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});

/**
 * @typedef {Object} Result
 * @property {boolean} success - Status apakah operasi berhasil atau tidak.
 * @property {string} [game] - Nama game (opsional).
 * @property {number|string} [id] - ID pemain atau entitas (opsional).
 * @property {string|number} [server] - Nama atau nomor server (opsional).
 * @property {string} [name] - Nama pemain atau karakter (opsional).
 * @property {string} [message] - Pesan status (opsional).
 */
