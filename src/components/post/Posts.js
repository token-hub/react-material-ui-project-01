import React, {useState} from 'react'
import PageHeader from '../common/PageHeader';
import Grid from '@material-ui/core/grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextFields from '../common/TextFields';
import Button from '@material-ui/core/Button';
import TemplatePost from './TemplatePost';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';	
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2rem 1rem',
		flexDirection: 'column',
		'& > h3' : {
			[theme.breakpoints.only('xs')]: {
				fontSize: '2rem',
			},
		}
	},
	form: {
		display: 'flex',
		flexDirection: 'column'
	}
}))

const Posts = () => {

	const {root, form} = useStyles();
	const [post, setPost] = useState({
		createPost: '',
	});

	const field = [{
		name: 'createPost',
		fieldType: 'textarea',
		placeholder: 'Create a post.'
	}]

	const handleChange = e => {
		setPost({ createPost: e.target.value });
	}


	const buttons = [
		{isIcon: true, display: <ThumbUpIcon />, value: 4},
		{isIcon: true, display: <ThumbDownIcon />, value: '' },
		{isIcon: false, display: '', value: 'Discusssion' },
	]

	return (
			<Grid container >
				<Grid item xs={1} />
				<Grid item xs={10} container className={root}>
					<PageHeader
						title='Posts'
						subtitle='Welcome to the community'
						icon={<EmailIcon color='secondary' />}
					/>

					<form action="" className={form}>
						<Typography variant='h6' color='secondary'> Say something...</Typography>
						<TextFields 
							fields={field}
							values={post}
							handleChange={handleChange} 
						/>
						<Button color='primary' variant='contained'> Submit </Button>
					</form>

					<TemplatePost buttons={buttons} name='John Doe' />
					<TemplatePost buttons={buttons} name='John Suyang' />
				</Grid>
				<Grid item xs={1} />
			</Grid>
	)
}

export default Posts