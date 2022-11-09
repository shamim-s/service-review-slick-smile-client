import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Photoview = ({image}) => {
    return (
        <PhotoProvider>
        <div className="foo">
            <PhotoView src={image}>
              <img src={image} alt="" />
            </PhotoView>
        </div>
      </PhotoProvider>
    );
};

export default Photoview;