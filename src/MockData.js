const developers = [
	{
		id: 1,
		developer: 'John Doe',
		description: 'Developer',
		company: 'Microsoft',
		website: 'sample',
		location: 'Seattle, WA',
		skills: ['html', 'javscript', 'python', 'css'],
		github: 'sampleGithub',
		bio: `Lorem, ipsum dolor sit, amet consectetur adipisicing elit.
				Quisquam nulla consectetur nihil placeat, cumque possimus 
				debitis iste ea non quidem, modi dolorem delectus nesciunt
				adipisci aliquid ipsa asperiores commodi voluptatibus.`
	},
]

export default () => {
	return new Promise( resolve => {
		setTimeout( () => resolve(developers), 0 )
	} )
}
