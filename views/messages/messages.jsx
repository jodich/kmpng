var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class Messages extends React.Component {
  render() { 

    const allMessages = this.props.results.map( (element) => {

      return (
            <div className="row">
              <div className="col-md-12 message-box" key={element.id}>

                <div className="message-sender"><span id="name">{element.name}</span> <span id="email">({element.email}) </span> sent a message:</div>
                <div className="message-details">Requesting For: {element.title}</div>
                <div className="message-message">{element.message}</div>
              
                <a href={"/user/messages/" + element.id}><div className="message-reply">Reply</div></a>

              </div>
            </div>
      )
    }); // END OF MAP FUNCTION

    return (
      <LayoutContainer>
        <div className="container" id="messages">
          <div className="row">
            <div className="col-lg-3 col-md-2 content">
            </div>


            <div className="col-lg-6 col-md-8 col-sm-12 content">
            
              <div>
                  {allMessages}
              </div>

            </div>


            <div className="col-lg-3 col-md-2 content">
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = Messages;






