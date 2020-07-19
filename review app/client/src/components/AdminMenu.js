import React, { Component } from 'react'

export class AdminMenu extends Component {
    constructor() {
        super()
        this.state = {
          title: '',
          description: '',
          errors: {}
        }
    
        // this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
      }


    render() {
        return (
            <div>
            
            
         <div className="container">
         <div className="row">
           <div className="col-md-6 mt-5 mx-auto">
             
               <h1 className="h3 mb-3 font-weight-normal">Add Movies</h1>
               <div className="form-group">
                 <label htmlFor="title">Title</label>
                 <input
                   type="title"
                   className="form-control"
                   name="title"
                   placeholder="Add a title"
                   value={this.state.title}
                   onChange={this.onChange}
                 />
               </div>
               <div className="form-group">
                 <label htmlFor="description">Description</label>
                 <textarea
                   type="description"
                   className="form-control"
                   name="description"
                   placeholder="Enter Description"
                   value={this.state.description}
                   onChange={this.onChange}
                 />
                 </div>
                 <div className="form-group">
                 <label htmlFor="fileup">Upload Movie Image</label>
                 <br/>
                 <input type="file"/>
               </div>
               <button
                 type="submit"
                 className="btn btn-lg btn-primary btn-block"
               >
                 Submit
               </button>
             
           </div>
         </div>
       </div>
</div> 
         
        )
    }
}

export default AdminMenu
