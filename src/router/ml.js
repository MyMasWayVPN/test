import { endpoint, headers } from '../utils';

/**
 * @typedef {Object} Result
 * @property {boolean} success - Status apakah operasi berhasil atau tidak.
 * @property {string} [game] - Nama game (opsional).
 * @property {number|string} [id] - ID pemain atau entitas (opsional).
 * @property {number|string} [server] - ID atau nama server (opsional).
 * @property {string} [name] - Nama pemain atau karakter (opsional).
 */

/**
 * Fungsi untuk melakukan request ke API Mobile Legends.
 * @param {number} id - ID pemain.
 * @param {number} zone - ID zona server pemain.
 * @returns {Promise<Result>} - Hasil operasi API.
 */
export default async function ml(id, zone) {
  const body = `voucherPricePoint.id=4150&voucherPricePoint.price=1579&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&voucherTypeName=MOBILE_LEGENDS&shopLang=id_ID&voucherTypeId=1&gvtId=1`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });

  const data = await response.json();

  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name: data.confirmationFields.username
  };
}
