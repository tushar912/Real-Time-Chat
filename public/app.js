window.addEventListener('DOMContentLoaded', (_) => {
  let websocket = new WebSocket("ws://" + window.location.host + "/websocket");
  let room = document.getElementById("chat-text");

  websocket.addEventListener("message", function (e) {
    let data = JSON.parse(e.data);
    let chatContent = `<p><strong>${data.username}</strong>: ${data.text}</p>`;

    room.innerHTML= room.innerHTML +chatContent;
    room.scrollTop = room.scrollHeight; // Auto scroll to the bottom
  });

  document.getElementById("input-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("input-username");
    let text = document.getElementById("input-text");
    websocket.send(
      JSON.stringify({
        username: username.value,
        text: text.value,
      })
    );
    text.value = "";
  });
});