import { endpoint, headers } from '../utils';

/**
 * @typedef {Object} Result
 * @property {boolean} success - Status apakah operasi berhasil atau tidak.
 * @property {string} [game] - Nama game (opsional).
 * @property {number|string} [id] - ID pemain atau entitas (opsional).
 * @property {string} [server] - Nama server (opsional).
 * @property {string} [name] - Nama pemain atau karakter (opsional).
 */

/**
 * Fungsi untuk melakukan request ke API Genshin Impact.
 * @param {number} id - ID pemain.
 * @returns {Promise<Result>} - Hasil operasi API.
 */
export default async function gi(id) {
  let sn = '';
  let sv = '';
  const idStr = id.toString();
  
  switch (idStr[0]) {
    case '6':
      sn = 'America';
      sv = 'os_usa';
      break;
    case '7':
      sn = 'Europe';
      sv = 'os_euro';
      break;
    case '8':
      sn = 'Asia';
      sv = 'os_asia';
      break;
    case '9':
      sn = 'SAR (Taiwan, Hong Kong, Macao)';
      sv = 'os_cht';
      break;
    default:
      return {
        success: false,
        message: 'Not found'
      };
  }

  const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16500&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`;
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  
  const data = await response.json();
  
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Genshin Impact',
      id,
      server: sn,
      name: data.confirmationFields.username
    };
  } else {
    return {
      success: false,
      message: 'Not found'
    };
  }
}
