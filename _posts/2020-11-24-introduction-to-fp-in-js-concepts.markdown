--- 
layout: post 
title:  "Introduction To Functional Programming in Javascript: Some Concepts" 
date:   2020-11-24 10:01:23 +0200 
categories: uncategorized 
author: Stephane Kibonge 
--- 

<br>


![Hero Image](https://cdn.pixabay.com/photo/2019/10/07/10/30/programming-4532296_1280.jpg)



<br>

## What is Functional Programming?

Functional Programming is a programming paradigm. In essence, it is a pattern, a way of programming. It is a way of approaching, modeling, and solving business problems through programming. 
In its purest form, Functional Programming builds programs by applying and composing functions.

The Functional Programming paradigm can be contrasted with its widely adopted alternative. Object-Oriented Programming (OOP), the alternative, is currently the major player in the programming landscape.  OOP's paradigm promotes building programs with a set of objects interacting with each other.
Functional Programming (FP) is part of a larger family of Procedural Programming Languages.  Procedural languages approach the solution to a problem through a combination of functions. On the other side, OOP is largely viewed as part of the family of Imperative Languages. In contrast to the first group, these languages solve problems by giving a sequence of step-by-step sets of instructions to solve a problem. 

Interestingly enough, it happens that Functional Programming has been around longer than Object Oriented has. Why is it not as popular as its counterpart? Much can be said about it. And much has been said about it. Suffice to say for now that, lately, there has been a renewed interest in the concepts of FP. There has also been a considerable amount of effort aimed at bringing it back to the forefront of the programming landscape. The push is to have FP become another major player in the ecosystem.

<br>



![Why Functional Programming Image](https://storage.needpix.com/rsynced_images/why-2028047_1280.png)

## Why Functional Programming?

OOP has been great at modeling complex business requirements. It has also been extensively used to solve business problems of various nature. But this hasn't been without several critics, amongst which a fairly high amount of bugs, rework, and inadequacies.
Without adopting a purist position and proclaiming that we should all abandon OOP to exclusively pursue FP, we should consider some of the more pragmatic views about these two school of thoughts.

It has been advertised that FP makes it easy to reason about code. Many of the concepts of FP aim at reducing "side effects" which will be explored later on. The result is code that tend to naturally embrace principles such as  the *Single Responsibility Principle*. Avoiding "side effects" also has the consequence of producing code that is easier to test. Maintainance is also easier.
It is argued that a measured dose of FP can make code easier to read. There are many other benefits that FP can bring to the developer, we won't cover them all here.

<br>






### Foundational Concepts

Each school of thoughts (FP and OOP) have concepts that form the corner stone of their respective paradigm. The table below lists some of these concepts:

| Functional Programming | Object Oriented Programming|
|-|-|
| Pure Functions |Abstraction|
| Avoiding Side Effects |Polymorphism|
| Immutability |Inheritance|
| Referential Transparency |Encapsulation|
| First-Class Functions |Interfaces|


Let's look at some of these concepts

<br>

![Math Function Symbol](https://cdn.pixabay.com/photo/2012/04/11/00/10/math-27248__340.png)

<br>

#### Pure Functions: 

Pure Functions are functions like any other but with two requirements:  
  - For the same set of inputs, the function will always provide the same output.
  - It avoids *Side Effects*: The Evaluation of the function that does not produce side effects.

In practice, the "same-inputs-same-output" rule means that the internal workings of the function do not rely on anything else than its input. It does not rely on local static variables, non local variables, or IO peripherals. It will not read from a file, or expect response from a network request. The output is purely and strictly a "function" of the inputs. 

The "same-inputs-same-output" prevents the function from reaching for anything else than its inputs. Whereas, the "avoid-side-effects" rule means that evaluating the function does not change the system in anyway. In essence, take a "screenshot" of the state of the system before the function is evaluated, and another one after the evaluation. Both screenshots will be exactly the same. Local static variables and non local variable are unchanged. The function has not interacted with IO peripherals. It has not written to a file, it has not sent a network request.

A pure function is exactly like a mathematical function. The only thing you should expect from the function is, and only is, the evaluation of some quantity that the function will return. That evaluation solely rely on the arguments provided as input to the function. The function will not write or read from file or to a console. It will not send network requests, it will not affect global variables. You get the idea.

<br>

#### Avoid Side Effects: 

We have explored this concept above in Pure Functions.

<br>

#### Immutability: 

This is partially a consequence of the "avoid-side-effects" rule. If you have data in the system that is used as input to functions, the functions should not change these data. There should never be funny stories about data being passed by reference and of functions that change this data while they are evaluated. To ensure this rule, data must be used with constructs that prevent them from changing. 
<br>In Javascript, this can be accomplished with using ``const`` instead of ``let`` or ``var`` to declare a variable. In other places ``Object.freeze(someData)`` can be used, well, to "freeze" the data and thus preventing from ever changing.

<br>

![Transparent Man](https://us.123rf.com/450wm/maudis60/maudis601604/maudis60160400370/56043896-stock-vector-vector-anonymous-invisible-man.jpg?ver=6)

<br>
#### Referential Transparency: 

This one can be a mouth-full. Let's imagine that all of you as a human being could be reduced to one word. All that you are, all of your essence, your dreams, your hopes, all of that could be reduced to that. Now obviously, it is impossible to summarize the complex beings that we are to any simple constructs such as "a word". But, sadly, for a function it is well possible.

Let's consider the function `f(a, b) = a + b`. So for the inputs `1` and `2`, `f(1, 2) = 3`. <br>`3` summarizes everything there is to know about all the internal complexities of our function. As soon as `3` is evaluated, it does not matter what that function did. It does not matter how it is did it, what sort of clever algorithm it used, or what resource intensive optimization it performed. 
`3` summarizes all about this function for the inputs `1` and `2`. This is so true that every occurrence of `f(1, 2)` could just be replaced by `3` and the program would work exactly the same. 

A function like that can be made disposable. We could decide to compute the function for this set of input the first time only the first time. And every other time, we could just remember the output and never call that function again. This is actually called "memoizing" the function.

<br>

A function that lends itself to this characteristic has *Referential Transparency*. A function such that the grand sum of all of its effects could be totally replaced by the value it returns, has *Referential Transparency*. 
If a function has *Referential Transparency*, we could decide to cut out the middle man (aka the function). We could maintain a table mapping inputs to the outputs produced by that function. And we could lookup in our new table to replace every call to the function *Memoization* is exactly this.

A function `f(a, b)` that returns `a + b` **and** logs to the console i.e. `console.log(a + b)` does not have *Referential Transparency*. Replacing it with `3` does not summarize all the effects of the function on the system. 

>In essence, *Side Effects* prevent *Referential Transparency*


<br>

#### First-Class Functions: 

Traditionally, the inputs to a function are data values or objects: *Numbers*, *Strings*, *Booleans*, *Dictionaries*, *Class Instances*,...
<br>Some Programming Languages also allow for a ***Function*** to be passed as input to another function. These Programming Languages are said to support *First-Class Functions*.

This fact actually allows one pretty interesting construct: ***Higher Order Function***. 
Basically, a *higher order function* is a function that receives another function as one of its inputs.

This pattern can be used to augment a function:
<!-- {% gist 283513b97082455bb74fe3380c4f332d %} -->



<br>



## Conclusion

There is much more to be said about Functional Programming and books have been written on the subject. The goal of this article was to introduce some of the concepts that are relevant in the life of the Software Developper with OOP Experience. 

One question seems to remain unaddressed: If side effects are to be avoided, how can FP be used in real worlds where side effects such file interaction, or network requests, database queries are essential aspects to solving business problems. We will address this in the next part of this article:
[http://127.0.0.1:4000/posts/introduction-to-fp-in-js-applied](http://127.0.0.1:4000/posts/introduction-to-fp-in-js-concepts)

Much of these concepts aren't new per say. These concepts have however acquired terminology and have been emphasized. For example, it is quite intuitive to be wary of making network requests everywhere in your code where external data is needed. Chances are you will have the wisdom to carefully design where and how network requests are handled. Some of the reason you would want to do that are: 
- To ease maintenance, testing but also,
- To restrict these sort of side effect somewhere where you can manage them better. 
Another example: It is common wisdom to avoid using global variable or states. Many discussion threads on various forums talk about the pros and cons of using something like the singleton pattern. These consideration are essentially things that FP's "side-effects" address.

As you can see many of the concepts that are listed in this post are things that have been discussed in the context of OOP. FP takes these concepts, formally defines them, gives them a name, and places emphasis on them.

As a programmer, once these concepts are understood, they will help writing better code. Integrating these principles will help writing code with less bugs. It will help writing code that is testable, naturally modular, easier to maintain. In languages that support First Class Functions (like javascript), the concept of "higher order functions" can be used. It could be used to compose function just as "object composition" is used in OOP. This brings huge benefits in OOP, it would do the same in FP. The concept enables reuse, flexibility, some interesting design patterns.

It is evident that functional programming can be a game changer for a software developer. And I hope this article has given you some perspective and picked your curiosity enough to start looking at the things for yourself.

<br>

## References
1. [https://opensource.com/article/17/6/functional-javascript](https://opensource.com/article/17/6/functional-javascript)
1. [https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f](https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f)
1. [https://spin.atomicobject.com/2019/08/29/functional-prog-pros-cons/](https://spin.atomicobject.com/2019/08/29/functional-prog-pros-cons/)
1. [https://spin.atomicobject.com/2019/08/22/functional-programming-patterns/](https://spin.atomicobject.com/2019/08/22/functional-programming-patterns/)

[//]: # 1. https://stackoverflow.com/a/2835936/9034699

[//]: # 1. https://medium.com/better-programming/fp-toy-7f52ea0a947e