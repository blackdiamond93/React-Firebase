import React from "react";
import Home from '../View/Home';
import About from '../View/About';
import { Switch, Route } from "react-router-dom";
import Tiendas from "../View/Tiendas";
import Restaurantes from "../View/Restaurantes";
import Joyerias from "../View/Joyerias";
import Reparacion from "../View/Reparacion";
import Turisticos from "../View/Turisticos";
import Medicos from '../View/Medicos';
import Automovil from '../View/Automoviles';
import Inversionista from '../View/Inversionista';
import Prestamo from '../View/Prestamo';
import Inscripcion from '../View/Inscripcion';


const Main = (props)=>(
    
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Inscripcion" component={Inscripcion}/>
            <Route exact path="/Contact" component={Home}/>
            <Route exact path="/Tienda de variedades" component={Tiendas} />
            <Route exact path="/Restaurantes" component={Restaurantes} />
            <Route exact path="/Joyeria" component={Joyerias} />
            <Route exact path="/Servicios de Reparacion" component={Reparacion} />
            <Route exact path="/Servicios Medicos" component={Medicos} />
            <Route exact path="/Centro Turisticos" component={Turisticos} />
            <Route exact path="/Venta Automoviles" component={Automovil} />
            <Route exact path="/Inversionista" component={Inversionista} />
            <Route exact path='/Prestamo' component={Prestamo} />
            <Route exact path='/Tienda de variedades/:id' component={About} />
            <Route exact path='/Restaurantes/:id' component={About} />
            <Route exact path='/Joyeria/:id' component={About} />
            <Route exact path='/Servicios de Reparacion/:id' component={About} />
            <Route exact path='/Servicios Medicos/:id' component={About} />
            <Route exact path='/Centro Turisticos/:id' component={About} />
            <Route exact path='/Venta Automoviles/:id' component={About} />
            <Route exact path='/Inversionista/:id' component={About} />
            <Route exact path='/Prestamo/:id' component={About} />
            

        </Switch>
    </div>
);
export default Main; 