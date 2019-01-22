import { connect } from 'react-redux'
import { getPosts } from '../store/actions'
import Top from '../pages/Top'

const mapStateToProps = (state: {[index: string]: any}) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch: any) => ({
  getPosts: (options: {}) => dispatch(getPosts(options))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)