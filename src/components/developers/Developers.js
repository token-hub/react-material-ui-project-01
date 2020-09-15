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
import { processDeleteDeveloper as deleteDevelopers } from '../../redux';


export const DialogContext = React.createContext();

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

const Developers = ({ developers, getDevelopers, deleteDevelopers, history }) => {
	const classes = useStyles();
		
	const [devs, setDevs] = useState([...developers]);
	const [isOpen, setOpen] = useState(false);

	const dialogTitle = 'Delete account';
	const dialogBody = 'Are you sure you want to delete this account?';

	const dialogClickHandler = () => {
		setOpen(!isOpen);
	}

	const dialogDeleteHandler = id => () => {
		deleteDevelopers(id);
		dialogClickHandler();
		history.push('/developers');
	}

	const dialog = {
		isOpen,
		dialogClickHandler,
		dialogDeleteHandler,
		dialogTitle,
		dialogBody
	}

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
						href='/developer' 
						variant='contained' 
						size='large'>
						Add developer
					</Button>
						{
							devs.length > 0 && 
								<DialogContext.Provider value={dialog} >
								{
									devs.map( ({id, developer, description, location, skills}, index) => 
										(
											<DeveloperCard
												id={id}
												developer={developer}
												description={description}
												location={location}
												skils={skills}
												key={id}
											/>
										) 
									)
								}
								</DialogContext.Provider>
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
	getDevelopers,
	deleteDevelopers
}

Developers.propTypes = {
	developers: PropTypes.array.isRequired,
	getDevelopers: PropTypes.func.isRequired,
	deleteDevelopers: PropTypes.func.isRequired,
}

export default  connect(mapStateToProps, mapDispatchToProps)(Developers)