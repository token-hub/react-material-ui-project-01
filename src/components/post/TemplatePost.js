import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		margin: '1.5rem 0',
		padding: '1rem',
		width: '100%',
	},
	img: {
		borderRadius: '50%',
	},
	marginTop: {
		marginTop: '1rem'
	},
	btn: {
		margin: '.3rem',
		[theme.breakpoints.only('xs')] : {
			width: '100%'
		}
	},
}))


const TemplatePost = ({buttons = [], name = ''}) => {
	const {img, root, marginTop, btn} = useStyles();

	return (
		<Card
			raised
			className={root}
			>
			<Grid container >
				<Grid item container xs={12} sm={3} alignItems='center' direction='column' >
					<img 
						alt='john doe'
						src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
						className={img} 
						/>
					<Typography 
						variant='h6' 
						color='primary'
						className={marginTop}
						>{name}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={9} container alignItems='center'>
					<Typography 
						variant='body1' 
						color='secondary'
						className={marginTop}
						>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur
						 quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa
					</Typography>

					<Grid container item>
						{
							buttons.length > 0 &&  buttons.map( ({isIcon, display, value}, index) => {
								
								const extraProps = {};
								let color = 'primary';

								if (isIcon) {
									Object.assign(extraProps, {startIcon: display})
									color='default'
								} else {
									Object.assign(extraProps, {href: '/posts/post-discussion'})
								}
									return (
											<Button
												variant='contained'
												color={color}
												size='small'
												className={btn}
												{...extraProps}
												> {value}
											</Button>
										)
								
								}
							)
						}

					</Grid>
				</Grid>
			</Grid>
		</Card>
	)
}

TemplatePost.propTypes = {
	buttons: PropTypes.array,
}

export default TemplatePost