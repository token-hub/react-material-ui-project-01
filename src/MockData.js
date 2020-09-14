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
		bio: 'sampleBio'
	}
]

export default () => {
	return new Promise( resolve => {
		setTimeout( () => resolve(developers), 0 )
	} )
}
