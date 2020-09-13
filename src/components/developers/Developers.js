import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeveloperCard from './DeveloperCard';
import Button from '@material-ui/core/Button';
import PageHeader from '../common/PageHeader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { processGetDevelopers as getDevelopers } from '../../redux';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '4rem 2rem',
		flexDirection: 'column',
		[theme.breakpoints.only('xs')]: {
			padding: '2rem',
		},
		'& > h3' : {
			[theme.breakpoints.only('xs')]: {
				fontSize: '2rem',
			},
		}
	},
}))

const Developers = ({ developers, getDevelopers }) => {
	const classes = useStyles();
	
	const [devs, setDevs] = useState([...developers]);
	
	useEffect( () => {
		if (developers.length < 1) {
			getDevelopers();
		} else {
			setDevs([...developers])
		}
	}, [developers] )


	return (
		<div>
			<Grid container >
				<Grid item sm={1} />
				<Grid item sm={10} container className={classes.root}>

					<PageHeader
						title='Add An Experience'
						subtitle='Add any developer/programming positions that you have had in the past'
						icon={<AccountCircle color='secondary' />}
					/>

					<Button
						href='/developer/create' 
						variant='contained' 
						size='large'>
						Add developer
					</Button>

					{
						devs.length > 0 && devs.map( ({developer, description, location, skills}, index) => 
							(
								<DeveloperCard
									developer={developer}
									description={description}
									location={location}
									skils={skills}
									key={index}
								/>
							) 
						)
					}

				</Grid>
				<Grid item sm={1} />
			</Grid>
		</div>
	)
}

const mapStateToProps = (state) => ({
	developers: state.developers
})

const mapDispatchToProps = {
	getDevelopers
}

Developers.propTypes = {
	developers: PropTypes.array.isRequired,
	getDevelopers: PropTypes.func.isRequired,
}

export default  connect(mapStateToProps, mapDispatchToProps)(Developers)