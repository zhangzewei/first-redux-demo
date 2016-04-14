export default function click(state = 0, action) {
  switch (action.type) {
    case 'beclicked':
      return state + 1
      case 'beclickedthird':
        return state + 3
      case 'clear':
        return state = 0
    default:
      return state
  }
}
