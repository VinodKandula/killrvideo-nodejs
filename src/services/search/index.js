import { SearchService } from './protos';
import { searchVideos } from './search-videos';
import { getQuerySuggestions } from './get-query-suggestions';

/**
 * The search service implementation.
 */
const implementation = {
  searchVideos,
  getQuerySuggestions
}; 

/**
 * Search service which allows searching for videos.
 */
export default {
  service: SearchService.service,
  implementation 
};