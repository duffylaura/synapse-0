
import Plain from 'slate-plain-serializer'
import { Editor as SlateEditor } from 'slate-react'
import React from 'react'
import classnames from 'classnames'

class ContentEditable extends React.Component {
  state = {
    value: Plain.deserialize('')
  }
  
  onChange = (state) => {
    this.setState({ value: state.value }, () => {
      this.props.update(state)
    })
  }

  componentDidMount () {
    let { annotation } = this.props
    if (annotation.text) {
      this.setState({
        value: Plain.deserialize(annotation.text)
      })
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.value !== this.state.value ||
    nextProps.selected !== this.props.selected ||
    nextProps.draggable !== this.props.draggable ||
    nextProps.hover !== this.props.hover
  }

  render() {
    const { selected, hover, draggable } = this.props
    console.log({ selected, hover, draggable })
    const className = classnames(
      'pdf-embed-editor',
      selected ? 'pdf-embed-editor-selected' : '',
      hover ? 'pdf-embed-editor-hover' : '',
      draggable ? 'pdf-embed-editor-draggable' : ''
    )
    return (
      <div 
        className={className}
        >
        <SlateEditor
          ref={(ref) => { this.editor = ref }}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange} 
        />
      </div>
    )
  }
}

ContentEditable.defaultProps = {
  placeholder: 'Enter some text...'
}
export default ContentEditable
