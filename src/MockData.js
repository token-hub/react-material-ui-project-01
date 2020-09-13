const developers = [
	{
		developer: 'John Doe',
		description: 'Developer at Microsoft',
		location: 'Seattle, WA',
		skills: ['html', 'javscript', 'python', 'css']
	}	
]

// const setTimeoutPromise = () => new Promise(resolve => setTimeout(resolve(developers), 2000))

// export const MockData = () => {
// 	return new Promise( resolve => {
// 		setTimeout( () => resolve(developers) , 0)
// 	} )
// }

export default () => {
	return new Promise( resolve => {
		setTimeout( () => resolve(developers), 0 )
	} )
}
// const timer = (data, time) => 
//     new Promise((resolve, reject) => 
//         setTimeout(() => resolve(data), time)
// );