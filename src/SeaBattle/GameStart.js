import React from "react";

export default function GameStart(tableHeader,choosenShip,letter,num,table,boolean) {
	let counter= [];
		for (let i = 0; i < choosenShip; i++) {
			let letter1 = tableHeader[tableHeader.indexOf(letter)+i]
			boolean ? document.querySelector('.square_'+letter1+num).classList.add('hoverd')
			:document.querySelector('.square_'+letter1+num).classList.remove('hoverd')			
		}
	return(
		counter
	)

}