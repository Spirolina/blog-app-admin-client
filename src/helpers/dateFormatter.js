import  moment  from 'moment';

export const convert = (date) => {
    return moment(date).format('DD-MM-YYYY');
}