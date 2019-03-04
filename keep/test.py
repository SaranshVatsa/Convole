def f(i):
    if i<2:
        return i
    return f(i-1)+f(i-2)

print(f(10))
