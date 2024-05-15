import React from 'react';
import PropTypes from 'prop-types';

const ContentList = (props) => {
  const { listElements } = props;
  return (
    <ul>
      {
        Object.keys(listElements).map((key, index) => {
          return (
            <li key={`contentList__element-${index}`}>
            <b>{key}</b>: {listElements[key]}
            </li>
          )
        })
      }
    </ul>
  );
};

ContentList.propTypes = {
  listElements: PropTypes.object.isRequired
};

export default ContentList;
