class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchbar" style={{textAlign: 'left'}}>
                <div><input placeholder="Søk" value={this.props.searchValue} onChange={this.props.handleSearchChange}/></div>
                <label>
                    <input type="checkbox" value={this.props.inStockValue} onChange={this.props.toggleInStock}/>
                    Kun vis produkter på lager
                </label>
            </div>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        return (
            <div className="producttable" style={{marginTop: '20px', padding: '5px'}}>
                <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Navn</th>
                            <th>Pris</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.herbs.length > 0 && (
                            <tr className="productcategoryrow" style={{padding: '5px'}}>
                            <td colSpan="2">Urter</td>
                            </tr>
                        )}

                        {this.props.herbs.map(herb => (
                            <tr key={herb.name} className="productrow" style={{padding: '5px'}}>
                                <td>{herb.name}</td>
                                <td>{herb.price}</td>
                            </tr>
                        ))}

                        {this.props.trees.length > 0 && (
                            <tr className="productcategoryrow" style={{padding: '5px'}}>
                            <td colSpan="2">Trær</td>
                            </tr>
                        )}

                        {this.props.trees.map(tree => (
                            <tr key={tree.name} className="productrow" style={{padding: '5px'}}>
                                <td>{tree.name}</td>
                                <td>{tree.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            inStockValue: false
        };
    }

    handleSearchChange(e) {
        this.setState({searchValue: e.target.value});
    }

    toggleInStock() {
        this.setState({inStockValue: !this.state.inStockValue});
    }

    render() {
        const searchValue = this.state.searchValue;
        const inStockValue = this.state.inStockValue;
        const herbs = [
            {name: 'Koriander', price: '15 kr', inStock: true},
            {name: 'Basilikum', price: '20 kr', inStock: false},
            {name: 'Persille', price: '19 kr', inStock: false}
        ].filter(elem => {
            const search = !searchValue || elem.name.toLowerCase().match(searchValue.toLowerCase());
            const stock = !inStockValue || elem.inStock;
            return search && stock;
        });

        const trees = [
            {name: 'Avokado', price: '150 kr', inStock: true},
            {name: 'Palme', price: '120 kr', inStock: false}
        ].filter(elem => {
            const search = !searchValue || elem.name.toLowerCase().match(searchValue.toLowerCase());
            const stock = !inStockValue || elem.inStock;
            return search && stock;
        });
        return (
            <div className="filterableproducttable" style={{padding: '5px'}}>
                <SearchBar inStockValue={this.state.inStockValue} searchValue={this.state.searchValue} handleSearchChange={this.handleSearchChange.bind(this)} toggleInStock={this.toggleInStock.bind(this)}/>
                <ProductTable herbs={herbs} trees={trees}/>
            </div>
        );
    }
}

ReactDOM.render(<FilterableProductTable/>, document.getElementById('filterableproducttable-wrapper'));
