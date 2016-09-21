"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
        _classCallCheck(this, SearchBar);

        return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
    }

    _createClass(SearchBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "searchbar", style: { textAlign: 'left' } },
                React.createElement(
                    "div",
                    null,
                    React.createElement("input", { placeholder: "Søk", value: this.props.searchValue, onChange: this.props.handleSearchChange })
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "checkbox", value: this.props.inStockValue, onChange: this.props.toggleInStock }),
                    "Kun vis produkter på lager"
                )
            );
        }
    }]);

    return SearchBar;
}(React.Component);

var ProductTable = function (_React$Component2) {
    _inherits(ProductTable, _React$Component2);

    function ProductTable() {
        _classCallCheck(this, ProductTable);

        return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).apply(this, arguments));
    }

    _createClass(ProductTable, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "producttable", style: { marginTop: '20px', padding: '5px' } },
                React.createElement(
                    "table",
                    { style: { width: '100%' } },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "Navn"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Pris"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.props.herbs.length > 0 && React.createElement(
                            "tr",
                            { className: "productcategoryrow", style: { padding: '5px' } },
                            React.createElement(
                                "td",
                                { colSpan: "2" },
                                "Urter"
                            )
                        ),
                        this.props.herbs.map(function (herb) {
                            return React.createElement(
                                "tr",
                                { key: herb.name, className: "productrow", style: { padding: '5px' } },
                                React.createElement(
                                    "td",
                                    null,
                                    herb.name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    herb.price
                                )
                            );
                        }),
                        this.props.trees.length > 0 && React.createElement(
                            "tr",
                            { className: "productcategoryrow", style: { padding: '5px' } },
                            React.createElement(
                                "td",
                                { colSpan: "2" },
                                "Trær"
                            )
                        ),
                        this.props.trees.map(function (tree) {
                            return React.createElement(
                                "tr",
                                { key: tree.name, className: "productrow", style: { padding: '5px' } },
                                React.createElement(
                                    "td",
                                    null,
                                    tree.name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    tree.price
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return ProductTable;
}(React.Component);

var FilterableProductTable = function (_React$Component3) {
    _inherits(FilterableProductTable, _React$Component3);

    function FilterableProductTable() {
        _classCallCheck(this, FilterableProductTable);

        var _this3 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this));

        _this3.state = {
            searchValue: '',
            inStockValue: false
        };
        return _this3;
    }

    _createClass(FilterableProductTable, [{
        key: "handleSearchChange",
        value: function handleSearchChange(e) {
            this.setState({ searchValue: e.target.value });
        }
    }, {
        key: "toggleInStock",
        value: function toggleInStock() {
            this.setState({ inStockValue: !this.state.inStockValue });
        }
    }, {
        key: "render",
        value: function render() {
            var searchValue = this.state.searchValue;
            var inStockValue = this.state.inStockValue;
            var herbs = [{ name: 'Koriander', price: '15 kr', inStock: true }, { name: 'Basilikum', price: '20 kr', inStock: false }, { name: 'Persille', price: '19 kr', inStock: false }].filter(function (elem) {
                var search = !searchValue || elem.name.toLowerCase().match(searchValue.toLowerCase());
                var stock = !inStockValue || elem.inStock;
                return search && stock;
            });

            var trees = [{ name: 'Avokado', price: '150 kr', inStock: true }, { name: 'Palme', price: '120 kr', inStock: false }].filter(function (elem) {
                var search = !searchValue || elem.name.toLowerCase().match(searchValue.toLowerCase());
                var stock = !inStockValue || elem.inStock;
                return search && stock;
            });
            return React.createElement(
                "div",
                { className: "filterableproducttable", style: { padding: '5px' } },
                React.createElement(SearchBar, { inStockValue: this.state.inStockValue, searchValue: this.state.searchValue, handleSearchChange: this.handleSearchChange.bind(this), toggleInStock: this.toggleInStock.bind(this) }),
                React.createElement(ProductTable, { herbs: herbs, trees: trees })
            );
        }
    }]);

    return FilterableProductTable;
}(React.Component);

ReactDOM.render(React.createElement(FilterableProductTable, null), document.getElementById('filterableproducttable-wrapper'));