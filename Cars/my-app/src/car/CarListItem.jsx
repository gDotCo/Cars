import React, { Component } from 'react';
import { Link } from 'react-router';

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`,
		}}
		src={imgSrc}
	/>
);

class Card extends Component{
    
    render(){
        const {cardId, cardSelected, topOffset, hoverOffset} = this.props;
		//const offset =  250;
        //const transform = `translate3d(0,${topOffset - offset}px,0)`;
        const cardStyles = {
			...style1,
			background: this.props.background,
		
			height: this.props.height,
		}
        
         return (
        <div style={cardStyles}>
        <header style={styles.cardHeader}>
            <ProfilePicture imgSrc={this.props.imgSrc} borderColor={this.props.imgBorderColor} />
            <div>
				<h1 style={styles.headerName}>{this.props.name}</h1>
				<h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{this.props.title}</h3>
			</div>
            </header>
        </div>
    ) 
    }
   
}

class CarListItem extends Component{
    render(){
        const cars = this.props.data;
        const pageStyle={
            width:'60%'
        };
        return(
            <div>
            <div className="list-group"style={pageStyle}>
            {cars.map((car) => 
                <Link
                    key={car.id}
                    to={"/"+car.id}
                    className="list-group-item">
                    <Card {...car}/>
                    </Link>
            )}
            </div>
            </div>
 
        );
    }  
}



const style1 = {

};

const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		//color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0',
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};

export default CarListItem;