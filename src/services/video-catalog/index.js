import { VideoCatalogService } from './protos';
import { getLatestVideoPreviews } from './get-latest-video-previews';
import { getVideo } from './get-video';

/**
 * The video catalog service implementation.
 */
const implementation = {
  submitUploadedVideo(call, cb) {
    cb(new Error('Not implemented'));
  },

  submitYouTubeVideo(call, cb) {
    cb(new Error('Not implemented'));
  },

  getVideo,

  getVideoPreviews(call, cb) {
    cb(new Error('Not implemented'));
  },

  getLatestVideoPreviews,
  
  getUserVideoPreviews(call, cb) {
    cb(new Error('Not implemented'));
  }
}; 

/**
 * Video Catalog Service, responsible for tracking the catalog of videos available for playback.
 */
export default {
  service: VideoCatalogService.service,
  implementation 
};