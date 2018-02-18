import React, { Component } from 'react';
import '../../App.css';
import ProductCard from './productCard'

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            allProducts: [],
            searchQuery: '', //for the 
            priceSort: false,
            nameSort: false,
            timeSort: false,
            about: false,
            contact: false,
        }
    }

    renderProducts = () => {
        const { products } = this.state;
        if (products.length) {
            return products.map(product => {
                // console.log(product)
                return <ProductCard
                    // plus whatever else we get from the backend
                    seller={product.seller}
                    productID={product.productID}
                    description={product.blurb}
                    username={product.username}
                    title={product.title}
                    category={product.category}
                    imageName={product.imageName}
                    // sellerId= {product.seller}
                    // prodId= {product.prodId}
                    // key= {product.prodId}
                    price={product.price}
                    // addToBag={this.addToBag}// more limited than addToFav below, works to send one props(propId)
                    addToCart={() => this.addToCart(product)}
                    addToFav={() => this.addToFav(product)}
                />

            })
        } else {
            return <div>Nothing available</div>
        }
    }
    submitQuery = () => {
        const { products, searchQuery } = this.state
        let tempObj = {};
        let finalArray = [];
        function filterItems(query, value) {
            var word = value.toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
            return word
        }
        for (var i = 0; i < products.length; i++) {
            tempObj = products[i]
            for (let value of Object.values(tempObj)) {
                if (filterItems(searchQuery, value)) {
                    finalArray.push(tempObj)
                    break
                }
            }
        }
        this.setState({ products: finalArray })
    }

    //stretch goal for search function
    onInput = (event) => {
        this.setState({ searchQuery: event.target.value }, () => {
            if (this.state.searchQuery === '') {
                this.setState({ products: this.state.allProducts })
            }
        })
    }
    addToFav = (item) => {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass whole item to backend to store in favs
        // fetch("/fav", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })

        console.log('fav', item);
    }
    addToCart = (item) => {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready

        fetch("/addToCart", {
            method: "POST",
            body: JSON.stringify(item),
        })
            //   .then(x=> x.text())
            //   .then(y=> JSON.parse(y))
            .then((z) => console.log('from renaud', z.text()))
        //   .then(lst=> this.setState({ products: lst}))

        console.log('Cart', item);
    }
    sortPrice = () => {
        const { priceSort, products } = this.state;
        this.setState({ priceSort: !priceSort })
        if (priceSort) {
            products.sort(function (a, b) {
                return Number(a.price) - Number(b.price);
            })
        } else {
            products.sort(function (a, b) {
                return Number(b.price) - Number(a.price);
            })
        }
    }
    sortName = () => {
        const { nameSort, products } = this.state;
        this.setState({ nameSort: !nameSort })
        if (nameSort) {
            products.sort(function (a, b) {
                var x = b.title.toLowerCase();
                var y = a.title.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            })
        } else {
            products.sort(function (a, b) {
                var x = a.title.toLowerCase();
                var y = b.title.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            })
        }
    }
    sortTime = () => {   //add timestamp sort for naming
        const { timeSort, products } = this.state;
        this.setState({ timeSort: !timeSort })
        if (timeSort) {
            products.sort(function (a, b) {
                var x = new Date(b.timeStamp);
                var y = new Date(a.timeStamp);
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            })
        } else {
            products.sort(function (a, b) {
                var x = new Date(a.timeStamp);
                var y = new Date(b.timeStamp);
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            })
        }
    }

    componentDidMount() {
        let forSaleProducts = []
        // fetching items from backend
        fetch("/main")
            .then(x => x.text())
            //.then(y=>{console.log('y=',y); return y})
            .then(y => JSON.parse(y))

            .then(lst => {
                lst.forEach(item => {
                    forSaleProducts.push(item.forSale)
                }
                )
                var forSaleAll = []
                for (var i = 0; i < forSaleProducts.length; i++) {
                    for (var j = 0; j < forSaleProducts[i].length; j++) {
                        forSaleAll.push(forSaleProducts[i][j])
                    }
                }
                //console.log('forsaleAll = ', forSaleAll)
                return this.setState({ products: forSaleAll, allProducts: forSaleAll })
            }
            )
    }
    categorySearch = (categories) => {
        const { products, allProducts } = this.state
        //this.setState({ products: this.state.allProducts })
        let newArr = allProducts;
        let finalArray = [];
        allProducts.forEach(function (obj) {
            if (obj.category === categories) {
                finalArray.push(obj)
            }
        })
        this.setState(this.setState({ products: finalArray }))
    }

    render() {
        console.log(this.state.products)

        if (!this.state.about) {
            return (
                <div className='App'>
                    <div className='Main-items'>
                        W E L C O M E
                </div>
                    <div className='Main-items'>
                        <input
                            type="text"
                            id="mySearch"
                            placeholder="Search for items"
                            value={this.state.searchQuery}
                            onChange={this.onInput}>
                        </input>
                        <button className="button2" onClick={this.submitQuery}>Submit</button>

                    </div>
                    <div>
                        <button id="sort" onClick={this.sortPrice}>price</button>
                        <button id="sort" onClick={this.sortName}>name</button>
                        <button id="sort" onClick={this.sortTime}>recent</button>
                    </div>
                    <div>
                        <button className="button2" id="tableOfContents" onClick={()=> this.setState({products: this.state.allProducts})}>Clear</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Artisanal')}>Artisanal</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Audio')}>Audio</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Automotive')}>Automotive</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Beauty and Health')}>Beauty and Health</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Books/Audible')}>Books/Audible</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Clothing')}>Clothing</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Electronics')}>Electronics</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Home, Garden and Tools')}>Home, Garden and Tools</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Toys, Kids and Baby')}>Toys, Kids and Baby</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Odd Jobs')}>Odd Jobs</button>
                        <button className="button2" id="tableOfContents" onClick={() => this.categorySearch('Other')}>Other</button>
                    </div>
                    <div>
                        {this.renderProducts()}
                    </div>
                </div>
            )
        }
    }
}
