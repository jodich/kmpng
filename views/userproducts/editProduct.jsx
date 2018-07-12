var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class EditProduct extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-lg-3 col-md-2 content">
            </div>



            <div className="col-lg-6 col-md-8 col-sm-12 content">
            <h4>Edit Item</h4>
            <form method="POST" action={"/user/product/"+ this.props.results.id + "?_method=PUT"} encType="multipart/form-data">


              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input className="form-control" type="text" name="title" defaultValue={this.props.results.title}/>
              </div>
              <div className="form-group">
                  <label htmlFor="title">Image:</label><br/>
                  <input type="file" name="image" id="file" className="inputfile" />
                  <label htmlFor="file">Choose a file</label><div id="filename">No file choosen</div>
              </div>

              <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" rows="5" name="description" defaultValue={this.props.results.description}></textarea>
              </div>

              <button type="submit" className="btn loginSubmit">Submit</button>

            </form>
            </div>


            <div className="col-lg-3 col-md-2 content">
            </div>
          </div>
        </div>

      <script type="text/javascript" src="/choosefile.js"></script>
      </LayoutContainer>
    );
  }
}

module.exports = EditProduct;






