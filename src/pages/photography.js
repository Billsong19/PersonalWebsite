import React from "react"
import { useState, useEffect, useRef, useCallback } from "react";
import * as cheerio from 'cheerio';
import Layout from "../components/layout"
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded';
import '../styles/photography.css'

const IMMICH_PROXY_HOST = "immich.billsong.nz"
const IMMICH_ALBUM_ID = "5so5YNUcS9i7_1NeER6VrXIVhzIwiHELA_bz-NoGocNep720opKNLdV--x4047_DARI"
const IMMICH_ALBUM_PATH = `share/${IMMICH_ALBUM_ID}`

export default function Photography() {
  const ref = useRef(null)
  const [lightGallery, setLightGallery] = useState([]);
  const [masonryInstance, setMasonryInstance] = useState(null);

  useEffect(() => {
    //fetch data from immich host.
    const fetchData = async () => {
      try {
        const albumUri = `https://${IMMICH_PROXY_HOST}/${IMMICH_ALBUM_PATH}`
        const response = await fetch(
          albumUri
        );
        if (response.ok) {
          const html = await response.text(); // Convert the response to text
          const $ = cheerio.load(html); // Load the HTML into cheerio
          var paths = []
          $('#lightgallery a').each((index, element) => {
            const href = $(element).attr('href')
            const imgPath = extractImgPath(IMMICH_ALBUM_ID, href)
            if (imgPath) {
              paths.push(imgPath)
            }
          })
          const elements = paths.map((path, index) => {
            const imgURI = `https://${IMMICH_PROXY_HOST}/${path}`
            return (
              <a href={`${imgURI}preview`} data-download-url={`${imgURI}original`} key={index} className='gallery-item lg-item' styles={{ margin: '10 10 10 10' }}>
                <img src={`${imgURI}preview`} className='img-responsive' />
              </a>
            )
          });
          // Output the modified HTML
          setLightGallery(elements); // Store the inner HTML as a string
        }
        else {
          console.error("Failed to fetch the resource:", response.status);
        }
      }
      catch (error) {
        console.error("Error fetching or parsing HTML:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    // Initialize Masonry after lightGallery is set
    if (lightGallery.length > 0 && masonryInstance === null) {
      const container = document.querySelector('.masonry-gallery');
      if (container) {
        const msnry = new Masonry(container, {
          itemSelector: '.gallery-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          gutter: '.gutter-sizer'
        });

        // Layout Masonry after images load
        imagesLoaded(container).on('progress', function () {
          msnry.layout();
        });

        setMasonryInstance(msnry); // Store Masonry instance
      }
    }
  }, [lightGallery, masonryInstance]);

  return (
    <Layout>
      <LightGallery
        elementClassNames={'masonry-gallery'}
        selector={'a'}

        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <div className="grid-sizer"></div>
        <div className="gutter-sizer"></div>
        {lightGallery}
      </LightGallery>
    </Layout >
  );
}

function extractImgPath(albumId, input) {
  const regex = `.*\/${albumId}\/[^\/]+\/`; // Capture everything up to and including '/bar/*/'
  const match = input.match(regex);  // Find the match

  if (match) {
    return match[0];  // Return the captured substring
  } else {
    return null;  // If no match, return null
  }
}