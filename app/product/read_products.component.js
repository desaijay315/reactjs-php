// component that contains all the logic and other smaller components
// that form the Read Products view
// class Contacts extends React.Component
//window.ReadProductsComponent = React.createClass({
class ReadProductsComponent extends React.Component{
	constructor(props) {
	      super(props);
	      this.state = {
	      	products: []
	      };
	}
    // getInitialState: function() {
    //     return {
    //         products: []
    //     };
    // },

      // on mount, fetch all products and stored them as this component's state
    componentDidMount() {
        this.serverRequest = $.get("http://localhost/reactjs/read_products.php", function (products) {
            this.setState({
                products: products.records
            });
        }.bind(this));
    }

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    // render component on the page
    render() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
}

//export default ReadProductsComponent;