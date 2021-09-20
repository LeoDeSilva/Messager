const messagesContainer = document.getElementById("display");
const origin = window.location.origin

function scrollToBottom() {
	var elem = document.getElementById("display");
	elem.scrollTop = elem.scrollHeight;
}

function home() {
	window.location = origin
}

$(document).on("submit", "#post-form", function (e) {
	message = document.getElementById("message").value
	if (message.strip().length > 0) {
		e.preventDefault();

		$.ajax({
			type: "POST",
			url: "/send",
			data: {
				username: $("#username").val(),
				room_id: $("#room_id").val(),
				message: $("#message").val(),
				csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
			},
			success: function (data) {
			},
		});
		document.getElementById("message").value = "";
	}
});
