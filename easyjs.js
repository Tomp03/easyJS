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

function easySelect(selector) {
  return document.querySelector(selector);
}

function easyEvent(selector, event, callback) {
  if (typeof selector === "string") {
    document.querySelector(selector).addEventListener(event, callback);
  } else if (typeof selector === "object") {
    selector.addEventListener(event, callback);
  } else {
    console.log("easyEvent : Enter a valid selector");
  }
}

async function easyFetch(url, callback, method = "GET", headers = {}, body) {
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: body == undefined ? null : body,
  });

  const data = await response.json();

  callback(data);
}

function easySave(key, value) {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  localStorage.setItem(key, value);
}

function easyLoad(key) {
  return localStorage.getItem(key);
}
