import React from 'react'
import TemplateExpEdu from './TemplateExpEdu';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	section: {
	  height: "100%",
	}
})

const DeveloperExpEdu = () => {

	const classes = useStyles();

	const exp = [
		{
			company: 'Microsoft',
			date: 'Oct 2011 - Current',
			position: 'Senior Developer',
			description: `Lorem ipsum dolor sit amet consectetur
						  adipisicing elit. Esse rem porro neque perspiciatis
						  aut, numquam cupiditate alias earum deserunt mollitia
						   cumque sunt, officiis illum possimus iure obcaecati 
						   inventore, quaerat, nihil.`
		},
		{
			company: 'Sun Microsystem',
			date: 'Oct 2004 - Nov 2010',
			position: 'System Admin',
			description: `Lorem ipsum dolor sit amet consectetur
						  adipisicing elit. Esse rem porro neque perspiciatis
						  aut, numquam cupiditate alias earum deserunt mollitia
						   cumque sunt, officiis illum possimus iure obcaecati 
						   inventore, quaerat, nihil.`
		}
	]

	const edu = [
		{
			company: 'University of Washington',
			date: 'Sep 1993 - June 1999',
			degree: 'Masters',
			FieldOfStudy: 'Computer Science',
			description: `Lorem ipsum dolor sit amet consectetur
						  adipisicing elit. Esse rem porro neque perspiciatis
						  aut, numquam cupiditate alias earum deserunt mollitia
						   cumque sunt, officiis illum possimus iure obcaecati 
						   inventore, quaerat, nihil.`
		},
	]

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<div className={classes.section}>	
						<TemplateExpEdu title='Experiences' exp={exp} />
					</div>
				</Grid> 
				<Grid item xs={12} sm={6}>
					<div className={classes.section}>	
						<TemplateExpEdu title='Education' style={{height: '100%'}} exp={edu} />
					</div>
				</Grid> 
			</Grid>
		</React.Fragment>
	)
}

export default DeveloperExpEdu