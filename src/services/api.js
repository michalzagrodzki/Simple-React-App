import axios from 'axios';

export function getProduct (vm, url) {
	axios.get(url,
	  { 
	    cancelToken: vm.source.token 
	  })
	  .then(response => {
	    const idNumber = parseInt(vm.props.match.params.id, 10);
	    const selectedItem = response.data.find((item) => {
	      return item.id === idNumber
	    });

	    vm.setState({
	      title: selectedItem.name,
	      description: selectedItem.description,
	      images: selectedItem.images,
	      details: selectedItem.details
	    })
	  },
	  (error) => {
	    if (axios.isCancel(error)) {
	      console.log('Request canceled: ' + error.message);
	    } else {
	      vm.setState({
	        error: {
	          message: error 
	        }
	      });
	    }
	  });
}

export function getProducts (vm, url) {
  axios.get(url, 
    { 
      cancelToken: vm.source.token 
    })
    .then(response => {
      vm.setState({
        products: response.data
      })
    },
    (error) => {
      if (axios.isCancel(error)) {
        console.log('Request canceled: ' + error.message);
      } else {
        vm.setState({
          error: {
            message: error 
          }
        });
      }
    });
}

export function getLimitedProducts (vm, url) {
  axios.get(url, 
    { 
      cancelToken: vm.source.token 
    })
    .then(response => {
      const productsLength = parseInt(response.data.length, 10)
      const slicedProducts = response.data.slice(0, 3)
      vm.setState({
        products: slicedProducts,
        productsLength: productsLength
      })
    },
    (error) => {
      if (axios.isCancel(error)) {
        console.log('Request canceled: ' + error.message);
      } else {
        vm.setState({
          error: {
            message: error 
          }
        });
      }
    });
}