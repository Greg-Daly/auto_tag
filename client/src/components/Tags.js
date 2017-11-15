import React from 'react';

const Tags = props => {

  const tagsResult = props.data.tags;
  let tagsList;

  if (tagsResult.length > 0) {
    tagsList = tagsResult.map(tag => "#"+tag.description.replace(/\s/g, ''))
    console.log('tags list: ' + tagsList);
  }

  if(props.data.tagsIsLoading) {
    return (<h2>Tags are Loading...</h2>)
  } else {
    return (
      <div>
        <p>Auto tags sees: {tagsList}</p>
        <button>Comment with tags</button>
      </div>
    )
  }

};

export default Tags;
