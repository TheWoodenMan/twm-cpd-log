const deleteBtn = document.querySelectorAll(".fa-trash");

Array.from(deleteBtn).forEach((el) => {
	el.addEventListener("click", deleteEntry);
});

async function deleteEntry() {
	const entryId = this.parentNode.childNodes[1].id;
	console.log(this.parentNode.childNodes[1].id);
	try {
		const response = await fetch("deleteEntry", {
			method: "delete",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				"entryIdFromJS": entryId,
			}),
		});

		const data = await response.json();

		console.log(data);
		location.reload();
	} catch (err) {
		throw new Error({ "error": err });
	}
}
