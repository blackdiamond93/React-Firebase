import React from 'react';
import Card from '../Componens/Card/Card';
import database from '../Model/Joyeria';
import GridList from '@material-ui/core/GridList';



class Joyeria extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menus:[],
        };

        
    }
    componentDidMount(){
        database.on('value',snap =>{
            const menus = [];
            snap.forEach(shot=>{
                menus.push({Nombre:shot.val(),key:shot.key})

            });
            
            this.setState({menus})
        });
    }
    
    render(){
        const {menus}=this.state;
        
        
        return(
           <div>
              
                    <GridList cellHeight={200} spacing={5}>
                    {menus.map(item=>(<Card key={item.key}  imagen={item.Nombre.Imagen} Nombre={item.Nombre.Nombre}/>))}
                    </GridList>  
              
           </div>
        );
    }
}
export default Joyeria ; 