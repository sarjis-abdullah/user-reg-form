import { debounce } from 'lodash';

export function useDebounce(callback, delay = 500) {
  return debounce(callback, delay);
}