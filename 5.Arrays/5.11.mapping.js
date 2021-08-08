console.log('============ Mapping an Array ============');

const num_arr = [1, 2, -1, 3, 4, 5];
const filter_arr = num_arr.filter(n => n > 0);
console.log(filter_arr);

const map_arr = filter_arr.map(n => '<li>' + n +'</li>');
console.log(map_arr);

const html = '<ul>' + map_arr.join() + '</ul>';
console.log(html);



// With Object
const new_arr = filter_arr.map(n => ( { value: n } ));
console.log(new_arr);

