import { format } from 'date-fns';
import placeholder from '../images/placeholder_sq.png'

export const DateFormat = date => {
  return format(new Date(date), ' dd MMM yyyy');
};
export const ToStringConverter = obj => {
  const result = String(obj.map(name => name.name))
    .split(',')
    .join(', ');
  return result;
};

export const numToFix = number => {
  return Number.parseInt(number);
};
export const formatUrl = url => {
  let arr = Array.from(url);
  if (arr[0] === '/') {
    arr.shift();
  }

  return arr.join('');
};

export const ratingConvert = rating => {
  let I = '';
  for (let i = 0; i < rating; i += 1) {
    I += '✯';
  }

  return I;
  //  return ` ${rating} ` + I;
};

export const formatAvatar = avatar => {
  if (avatar === null) {
    return placeholder;
  }


  if (avatar !== null) {
      let arr = Array.from(avatar);
      arr.shift();
    if (arr.length <= 31) {
      return `https://image.tmdb.org/t/p/w500/${arr.join('')}`;
    } else {
      return arr.join('');
    }
  }

};
