//create a new post  with title and body text
const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  const token = localStorage.getItem("token");
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  document.location.replace("/dashboard");
};

// edit post with new title and body
const editFormHandler = async function (event) {
  event.preventDefault();

  const titleEl = document.getElementById("post-title");
  const bodyEl = document.getElementById("post-body");
  const postId = document.getElementById("post-id");

  fetch("/api/post/" + postId.value, {
    method: "put",
    body: JSON.stringify({
      title: titleEl.value,
      body: bodyEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};
// delete post using post-id field
const deletePostHandler = async function (event) {
  console.log("clicked", event);
  event.preventDefault();
  const postId = document.getElementById("post-id");

  fetch("/api/post/" + postId.value, {
    method: "delete",
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

// event handlers
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector("#delete-btn")
  .addEventListener("click", deletePostHandler);
