let url = new URL(window.location.href)

console.log(url.searchParams);

let code = "4%2F0AX4XfWg7LVCIX0T_5g5ujG1JKHbKWn4P0NoPjirdeWgZRrkuqmoIwYQlyNc7SUUzBLYt8g";

url.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
url.searchParams.set("response_type", "code");
url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
url.searchParams.set("code", code);