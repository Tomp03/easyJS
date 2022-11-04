/** InnerHTML
 *
 * @param {*} selector // string or object
 * @param {string} sign // + or =
 * @param {string} content
 */
function easyHTML(selector, sign, content) {
  if (typeof selector === "object") {
    if (sign == "+") {
      selector.innerHTML += content;
    } else if (sign == "=") {
      selector.innerHTML = content;
    } else {
      console.log("easyHTML : Enter a valid sign");
    }
  } else if (typeof selector === "string") {
    if (sign == "+") {
      document.querySelector(selector).innerHTML += content;
    } else if (sign == "=") {
      document.querySelector(selector).innerHTML = content;
    } else {
      console.log("easyHTML : Enter a valid sign");
    }
  } else {
    console.log("easyHTML : Enter a valid selector");
  }
}

/** Query selector
 *
 * @param {string} selector
 */
function easySelect(selector) {
  return document.querySelector(selector);
}

/** Event listener
 *
 * @param {*} selector // string or object
 * @param {string} event // click, keyup ...
 * @param {*} callback
 */

function easyEvent(selector, event, callback) {
  if (typeof selector === "string") {
    document.querySelector(selector).addEventListener(event, callback);
  } else if (typeof selector === "object") {
    selector.addEventListener(event, callback);
  } else {
    console.log("easyEvent : Enter a valid selector");
  }
}

/** Fetch
 *
 * @param {string} url // your URL
 * @param {*} callback // callback for use your data
 * @param {string} method // default : GET
 * @param {object} headers // default : {}
 * @param {*} body // default : body
 */
async function easyFetch(url, callback, method = "GET", headers = {}, body) {
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: body == undefined ? null : body,
  });

  const data = await response.json();

  callback(data);
}

/** Local storage save
 *
 * @param {string} key
 * @param {*} value // string or object
 */
function easySave(key, value) {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  localStorage.setItem(key, value);
}

/** Local storage load
 *
 * @param {string} key
 */
function easyLoad(key) {
  return localStorage.getItem(key);
}
