export default function click(state = 0, action) {
  switch (action.type) {
    case 'beclicked':
      return state + 1
    default:
      return state
  }
}
