import React, { Component } from 'react';
import { addHighlight } from 'actions/article';
import { connect } from 'react-redux';
// import 'text-highlighter/src/TextHighlighter'
import { TextHighlighter } from 'utils/highlighter';

import { styles } from './styles.scss';

export class Article extends Component {
  static propTypes: {
    article: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.annotationsObject = Object.create(TextHighlighter);
    this.annotationsObject.initialize();
  }

  componentDidMount = () => {
    let articleContainer = document.getElementById('article-container');
    // this.annotationsObject = new TextHighlighter(articleContainer);
  }

  render() {
    var text = this.props.article.text;

    return (
      <div className='article'>
        <div className='tua__header-text'>
          Focus on the bold text about FOO and answer the questions.
        </div>
        <div ref={(ref) => this.articleRef = ref} id='article-container' className='article'>
          { text }
        </div>
      </div>
    );
  }

}

export default Article
