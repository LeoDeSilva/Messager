const messagesContainer = document.getElementById("display");

function scrollToBottom() {
	var elem = document.getElementById("display");
	elem.scrollTop = elem.scrollHeight;
}
//setInterval(scrollToBottom, 5000);

$(document).on("submit", "#post-form", function (e) {
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
			//alert(data)
		},
	});
	document.getElementById("message").value = "";
});
