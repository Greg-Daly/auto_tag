import React from 'react';

const Tags = props => {

  const tagsResult = props.data.tags;
  let tagsList;

  if (tagsResult.length > 0) {
    tagsList = tagsResult.map(tag => "#"+tag.description.replace(/\s/g, ''))
  }

  if(props.data.tagsIsLoading) {
    return (<h2>Tags are Loading...</h2>)
  } else {
    return (<p>Auto tags sees: {tagsList}</p>)
  }

};

export default Tags;
