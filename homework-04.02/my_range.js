function* my_range(a, b, c=1){
    for (a; a<= b; a+=c)
        yield a;
}
const range = my_range(1, 5, 2)
