export function activateTopic(topic) {
  return {
    type: 'ACTIVATE_TOPIC',
    topic
  };
}

export function getArticle(articleId) {
  return {
    type: 'GET_ARTICLE',
    articleId
  };
}

export function newQuestions(questions) {
  return {
    type: 'NEW_QUESTIONS',
    questions
  };
}
