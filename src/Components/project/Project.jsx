import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Projectimg from '../../assets/projectimg/downloadimg.jpg';
import foodapp from '../../assets/projectimg/foodorderapp.png';
import shoppingapp from '../../assets/projectimg/mernstackapp.png';
import mernstackapp from '../../assets/projectimg/shoppingapp.png';
import Quizapp from '../../assets/projectimg/Quizapp.png';
import todo from '../../assets/projectimg/todo.png';
import petcare from '../../assets/projectimg/petcare.png';



const Project = () => {
  return (
    <div className="container py-5" id="ProjectLink">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={foodapp} class="img-fluid"  alt="Food App" />
            <div className="card-body text-center">
              <h5 className="card-title">Food Ordering App</h5>
              <a href="https://github.com/Ujjwal-John/Shopping-Cart-App-using-Context-Api-and-UseReducer-Hook" target="_blank" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={shoppingapp} class="img-fluid" alt="Shopping App" />
            <div className="card-body text-center">
              <h5 className="card-title">Shopping Cart</h5>
              
              <a href="https://github.com/Ujjwal-John/Food_ecommerce_app" target="_blank" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={mernstackapp} class="img-fluid" alt="MERN Stack App" />
            <div className="card-body text-center">
              <h5 className="card-title">MERN Stack App</h5>
              
              <a href="https://github.com/Ujjwal-John/MERN-Stack-CRUD-App" target="_blank" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src={Quizapp} class="img-fluid" alt="MERN Stack App" />
            <div className="card-body text-center">
              <h5 className="card-title">Quiz App</h5>
              
              <a href="https://github.com/Ujjwal-John" target="_blank" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src={todo} class="img-fluid" alt="MERN Stack App" />
            <div className="card-body text-center">
              <h5 className="card-title">CRUD Todo App</h5>
              
              <a href="https://github.com/Ujjwal-John" target="_blank" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src={petcare} class="img-fluid" alt="MERN Stack App" />
            <div className="card-body text-center">
              <h5 className="card-title">Pets Care Ui</h5>
              
              <a href="https://github.com/Ujjwal-John" target="_blank" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        {/* Empty Project Cards */}
        

      </div>
    </div>
  );
};

export default Project;
