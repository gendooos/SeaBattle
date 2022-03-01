import React from "react";

export default function GameStart(tableHeader,letter,num,table,boolean,rotate) {
	const choosenShip = +document.querySelector('input[name="ship"]:checked').value[1];
	let counter= [];
	if (rotate) {
		for (let i = 0; i < choosenShip; i++) {
			let letter1 = tableHeader[tableHeader.indexOf(letter)+i],
				letter2 = tableHeader[tableHeader.indexOf(letter)-1]
			if(boolean){
				try {
					document.querySelector('.square_'+letter1+num).classList.add('hoverd');
					counter.push(document.querySelector('.square_'+letter1+num))
				} catch (error) {
					document.querySelector('.square_'+letter+num).classList.add('hoverd_err')
				 	document.querySelectorAll('.hoverd').forEach(e => {
						e.classList.add('hoverd_err')
				 	})
				}
			}else{
				document.querySelector('.square_'+letter1+num).classList.remove('hoverd')
				document.querySelector('.square_'+letter+num).classList.remove('hoverd_err')
				document.querySelectorAll('.hoverd').forEach(e => {
					e.classList.remove('hoverd_err')
				})
				counter=[]
			}
		}
	} else {
		for (let i = 0; i < choosenShip; i++) {
			if (boolean) {
				try {
				document.querySelector('.square_'+letter+(+num+i)).classList.add('hoverd')
				counter.push(document.querySelector('.square_'+letter+(+num+i)))
				} catch (error){
					document.querySelector('.square_'+letter+num).classList.add('hoverd_err')
				 	document.querySelectorAll('.hoverd').forEach(e => {
						e.classList.add('hoverd_err')
				 	})
				}
			}else{
				document.querySelector('.square_'+letter+(+num+i)).classList.remove('hoverd')
				document.querySelector('.square_'+letter+num).classList.remove('hoverd_err')
				document.querySelectorAll('.hoverd').forEach(e => {
					e.classList.remove('hoverd_err')
				})
				counter = []
			}
		}
	}
		
	return(
		counter
	)

}