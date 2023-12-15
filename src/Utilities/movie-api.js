import config from "../config/config";

export async function index() {
  const res = await fetch(config.BASE_URL, { method: "GET" });
  if (res.ok) {
    return res.json();
  } else {
  }
}

export async function show(id) {
  let endpoint = `${config.BASE_URL}/${id}`;
  const res = await fetch(endpoint, { method: "GET" });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid request");
  }
}
