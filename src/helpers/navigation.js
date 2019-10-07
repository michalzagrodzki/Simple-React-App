export function previousPage (vm) {
  const currentRoute = parseInt(vm.props.match.params.id, 10);
  const previousRoute = currentRoute - 1;
  if (previousRoute > 0) {
    vm.props.history.push(previousRoute.toString());
  }
}

export function nextPage (vm) {
  const currentRoute = parseInt(vm.props.match.params.id, 10);
  const nextRoute = currentRoute + 1;
  const routeLimit = vm.state.productsLength;
  if (nextRoute <= routeLimit) {
    console.log('redirecintg')
    vm.props.history.push(nextRoute.toString());
  }
}