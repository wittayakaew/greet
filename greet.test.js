const greet = require('./greet');
test('Write a method greet(name)', ()=>{
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test('when name is null', () =>{
    expect(greet()).toBe("Hello, my friend.");
})

test('When name is all uppercase', ()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!")
})

test('when name is array', () =>{
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.")
})

test('When name represents more than two names, separate them ', () =>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
})