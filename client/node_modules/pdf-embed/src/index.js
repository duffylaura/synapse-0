import React from 'react'
import PropTypes from 'prop-types'
import Canvas from './Canvas'

class Pdf extends React.Component {
  state = {
    page: 1,
    pages: 1
  }

  static propTypes = {
    page: PropTypes.number,
    scale: PropTypes.number,
    styles: PropTypes.object,
    className: PropTypes.string,
    nextButton: PropTypes.object,
    previousButton: PropTypes.object,
    containerStyles: PropTypes.object
  }

  static defaultProps = {
    containerStyles: {}
  }
  
  handleNext = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  } 

  handlePrevious = () => {
    this.setState(prevState => ({ page: Math.max(prevState.page - 1, 1) }))
  }

  onDocumentComplete = (pdf) =>
    new Promise((resolve, reject) => {
      this.setState({ pages: pdf.numPages }, resolve)
    })
  
  render() {
    let { page, pages } = this.state
    let {
      nextButton, 
      previousButton,
    } = this.props;   
   
    return(
      <div className={'pdf-embed'}>
        <Canvas 
          {...this.props} 
          page={page}
          onDocumentComplete={this.onDocumentComplete} 
        />
        <div className={'pdf-embed-buttons'}>
          {React.cloneElement(previousButton, {
            disabled: page === 1,
            onClick: this.handlePrevious
          })}

          {React.cloneElement(nextButton, {
            disabled: page === pages,
            onClick: this.handleNext
          })}
        </div>
      </div>
    )
  }
}

Pdf.displayName = 'pdf-embed';

export default Pdf