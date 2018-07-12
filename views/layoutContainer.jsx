var React = require("react");
var Navigation = require('./navigationBar.jsx')

class LayoutContainer extends React.Component {
  render() {
    return (
        <html>
        <head>
          <title>Kmpng.</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Palanquin|Vollkorn:700" rel="stylesheet"/>

          <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
        <div className="wrapper">
          <div className="wrapper-inside">
          <Navigation>
          </Navigation>

          {this.props.children}
          
          </div>
        </div>
        <footer className="footer">Kmpng @ Cuckoo Bird co.</footer>

          <script type="text/javascript" src="/navbar.js"></script>
          
        </body>
            

          
        </html>


    );
  }
}

module.exports = LayoutContainer;



    // <script type="text/javascript" src="/loginlogout.js"></script>
// <script type="text/javascript" src="/map.js"></script>

