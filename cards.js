document.getElementById("createButton").addEventListener("click", createCard);












function createCard(){
	var newCardText = document.getElementById("userInput").value;
	var cardContainer = document.getElementById("cardContainer");
	var childrenCount = cardContainer.childElementCount;

	var newString =`
		<div class="col-lg-4 col-md-6 col-sm-12">	
		<article class="card" id="card--${childrenCount}">
			<h3>Card</h3>
			<p id="cardParagraph--!">${newCardText}</p>
			<p>ID: ${childrenCount}</p>
			<input type="button" value="Delete" id="cardDelete--${childrenCount}">
		</article>
		</div>`;

	var divElement = document.createElement("div");
	divElement.id = "card--" + childrenCount;
	divElement.innerHTML = newString;


	cardContainer.appendChild(divElement);

	console.log("Chlidren: ", childrenCount);

	document.getElementById("cardDelete--" + childrenCount).addEventListener("click", deleteCard);
}

function deleteCard(event){
	console.log("Card to Delete: ", event.target.parentNode.id);

	var cardToDelete = event.target.parentNode.parentNode.parentNode;

	console.log("CardToDelete2: ", cardToDelete.parentNode.parentNode);

	cardToDelete.parentNode.removeChild(cardToDelete);
}