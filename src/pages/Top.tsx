import * as React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../store/actions'
import { item } from '../model'
import ArticleList from '../components/ArticleList'

interface Props {
  items: Array<item>,
  getItems: ({}) => void
}

const mapStateToProps = (state: { [index: string]: any }) => ({
  items: state.items
})

const mapDispatchToProps = (dispatch: any) => ({
  getItems: (options: {}) => dispatch(getItems(options))
})

class Top extends React.Component<Props> {
  constructor(props: any) {
    super(props)
  }

  componentWillMount() {
    this.props.getItems({ per_page: 5 })
  }

  render() {
    return (
      <ArticleList items={this.props.items} />
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)