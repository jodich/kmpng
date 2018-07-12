var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class NewProduct extends React.Component {
  render() {

    return (
     <LayoutContainer>
        <div className="container-fluid" id="new-item">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-1 content">
            </div>



            <div className="col-lg-6 col-md-8 col-sm-10 content">
            <h3>Add New Item</h3>

              <form action="/user/product/new" method="POST" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input className="form-control" type="text" name="title" required/>
                </div>

                <div className="form-group">
                  <input type="file" name="image" id="file" className="inputfile" />
                  <label htmlFor="file">Choose a file</label><div id="filename">No file choosen</div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows="5" name="description" required></textarea>
                </div>

                <button type="submit" className="btn loginSubmit">Submit</button>

              </form>
            </div>



            <div className="col-lg-3 col-md-2 col-sm-1 content">
            </div>
          </div>
        </div>

      <script type="text/javascript" src="/choosefile.js"></script>
      </LayoutContainer>
    );
  }
}

module.exports = NewProduct;





    // const allService = this.props.results.map( (element) => {
    //   return (
    //     <option value={element.id}>{element.type}</option>
    //   )
    // })


              // <div className="form-group signupInput">
              //   <input type="text" name="img" placeholder="image link"/>
              // </div>