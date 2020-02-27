import React from 'react';
import Select from '../Componens/Select/Select';
import Inputs from '../Componens/Inputs/Inputs';
import Button from '@material-ui/core/Button';

import firebase from '../Model/Storage';
import database from '../Model/Menu';
import Tienda from '../FirebaseConfig';




class Inscripcion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menus:[],
            url:null,
            urls:[],
            uploadvalue:0,
        };
        
     
    this.handleUpload = this.handleUpload.bind(this); 
    }
    
   handleUpload(event){
    let id;
    let array = [];
    let Select = document.getElementById("Select").value;
    let Nombre = document.getElementById("Nombre").value;
    let Descripcion = document.getElementById("Descripcion").value;
    let count =event.target.files.length;
    //capturar id contando los registros
    Tienda.database().ref(Select+"/").on('value',snap=>{
        snap.forEach(shot=>{
            array.push({Nombre:shot.val()})
           
        })
        id = array.length;
        console.log(id);
    })
    
       if (Nombre!=""&& Select!="") {
                const file =  event.target.files[0];
                const storageref = firebase.ref(`/Empredimientos /${Select}/${Nombre}/${file.name}`);
                const task = storageref.put(file);

                task.on('state_changed',snapshot=>{
                let percentaje = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                this.setState({uploadvalue:percentaje
                })
            },
            error=>{
                console.log(error.message)
            },
            ()=>{
                let downloadURL;
                task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    Tienda.database().ref(Select+"/"+id).set({
                        Imagen:downloadURL,
                        Nombre: Nombre,
                        NumImagenes:(count-1),
                        Rating:0,
                        Ubicacion: Descripcion,
                        id:id
                        
                    });
                })
                this.setState({
                    uploadvalue:100,
                    urls:downloadURL
                });
            });
            for (let index = 1; index < count; index++) {
                const file =  event.target.files[index];
                const storageref = firebase.ref(`/Empredimientos /${Select}/${Nombre}/${file.name}`);
                const task = storageref.put(file);

                task.on('state_changed',snapshot=>{
                let percentaje = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                this.setState({uploadvalue:percentaje
                })
            },
            error=>{
                console.log(error.message)
            },
            ()=>{
                let downloadURL;
                task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    Tienda.database().ref("Imagenes/"+Select+"/"+Nombre+"/"+index).set({
                        Imagen:downloadURL,
                    });
                })
                this.setState({
                    uploadvalue:100,
                    urls:downloadURL
                });
            });
                
            }

       }
      
        
   }
    Mostrar(){
        
        /*
        todo este codigo funciona 
       
        let Descripcion = document.getElementById("Descripcion").value;
        let Select = document.getElementById("Select").value;

        Tienda.database().ref(Select+"/").on('value',snap=>{
            snap.forEach(shot=>{
                array.push({Nombre:shot.val()})
               
            })
            id = array.length;
                  
        })

        Tienda.database().ref(Select+"/"+id).set({
            Imagen:"",
            Nombre: Nombre,
            NumImagenes:3,
            Rating:0,
            Ubicacion: Descripcion,
            id:id

        });

        */
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
        
        const {menus,urls,uploadvalue}=this.state;

        return(
        <div>
            
           <Select>
           <option> </option>
           {menus.map(item=>(<option key={item.key} value={item.Nombre.Nombre}>{item.Nombre.Nombre}</option>))}
           </Select>
           <Inputs id="Nombre" text="Nombre del emprendimiento"/>
           <Inputs id="Descripcion" text="Descripcion"/>
           
           <div >
            <input
                accept="image/*"
                
                id="Imagen"
                multiple
                type="file"
                name="Imagen"
                onChange={this.handleUpload}
            />
            <label htmlFor="Imagen">
                <Button variant="contained" color="primary"  component="span">
                Upload Portada
                </Button>
            </label>
            
            </div>
          </div>
        )
    };
    
}

export default Inscripcion;