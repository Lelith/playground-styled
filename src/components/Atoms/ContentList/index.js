import React from 'react';
import PropTypes from 'prop-types';

const ContentList = (props) => {
  const { listElements } = props;

  return (
    <ul className="contentList">
      <li>list</li>
{    /* { listElements.map((element, i) =>
      <li className="contentList__element" key={`contentList__element-${i}`}>
        {element}
      </li>
  )} */}
    </ul>
  );
};

ContentList.propTypes = {
  listElements: PropTypes.array.isRequired
};

export default ContentList;
