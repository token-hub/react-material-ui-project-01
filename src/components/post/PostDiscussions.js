import React, {useState} from 'react'
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextFields from '../common/TextFields';
import Button from '@material-ui/core/Button';
import TemplatePost from './TemplatePost';

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

const PostDiscussion = () => {

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

	return (
			<Grid container >
				<Grid item xs={1} />
				<Grid item xs={10} container className={root} >
					
					<Button 
						style={{ alignSelf: 'flex-start' }}
						variant='contained' 
						color='default' 
						href='/posts'> Back to posts
					</Button>

					<TemplatePost name='John Doe' />

					<form action="" className={form}>
						<Typography variant='h6' color='secondary'> Leave a comment</Typography>
						<TextFields 
							fields={field}
							values={post}
							handleChange={handleChange} 
						/>
						<Button color='primary' variant='contained'> Submit </Button>
					</form>

					<TemplatePost name='John Doe' />
					<TemplatePost name='John Suyang' />
				</Grid>
				<Grid item xs={1} />
			</Grid>
	)
}

export default PostDiscussion