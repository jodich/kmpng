var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class Reply extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container" id="reply">
          <div className="row">
            <div className="col-lg-3 col-md-2 content">
            </div>



            <div className="col-lg-6 col-md-8 col-sm-12 content">
            
                <div className="message-sender"><span id="name">Replying message to: {this.props.results.name}</span> <span id="email">({this.props.results.email}) </span></div>
                <div className="message-details">Requesting For: {this.props.results.title}</div>
                Message:
                <div className="message-message">{this.props.results.message}</div>

                <form method="POST" action={"/user/messages/" + this.props.results.id}>
                <div className="form-group reply-block">
                    <label htmlFor="description">Reply:</label>
                    <textarea className="form-control" rows="5" name="message" required></textarea>
                </div>

                <button type="submit" className="btn submit-btn">Submit</button>
                </form>

            </div>


            <div className="col-lg-3 col-md-2 content">
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = Reply;






