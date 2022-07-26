async function signupFormHandler(event) {
  event.preventDefault();

  const username = document
    .querySelector("#username-input-signup")
    .value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();

  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
