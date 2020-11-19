---
layout: post
title:  "Gentle Introduction to Creational Design Patterns"
date:   2020-11-19 07:52:55 +0200
categories: jekyll update
author: Stephane Kibonge
---

## What are Design Patterns, and why should you care about them?


One of the most rewarding things in software development is certainly the opportunity to Create. We create products that empower many users in performing various things. We create solutions that ease the lives and work of many. The impact of our creations can span places, cultures, time. There is no argument here: We are Creators.<br><br>

But we are not only creators. Constraints are inherent to our *awesome-super-creative powers*. One of these constraints is Reliability. Maintainability is another one. And there is a hoard of other related qualities. We constantly make decisions in order to meet these constraints. To complicate matters, these decisions are usually influenced by other previous decisions and they often involve tradeoffs in system properties.  <br>

In the midst of all these complex intricacies, one thing remains important: 
><br>The Quality of the End Product. <br><br>



<br>
*In other words, can you foresee the consequences of your software design decisions? And how they can impact the behavior of your end product?*

The ability to answer these questions is only borne out of years of experience.

<br><br>This is where **design patterns** come in. I like to think of them as nuggets of wisdom. They are borne out of the collective experience of millions of software developers. Across places, across time.

Why should you care about them (these design patterns)? Well, let's say, I succeed today in enticing you to give them a few hours of learning.

You come out of these few hours enriched with some of this immense and collective experience. And that makes you a better developer.

It also makes the lives of anyone who comes into contact with your code a little bit easier. In fact, it allows millions of developers to recognize these patterns in your code. It's easier for them to maintain your code.  It's easier for them to work with your code.

It allows your future self to look back at your code and understand it again.

Wikipedia gives the following definition to design patterns:

(They are)... reusable solutions to commonly occurring problems within a given context in software design.

One of the best books to read on the subject is: “Design Patterns: Elements of Reusable Object-Oriented Software”.

The four authors of the book have become famously known as the “Gang Of 4”.

The design patterns from their book typically fall into 3 categories:

- Creational Design Patterns: Concerned with the creation of objects.

- Structural Design Patterns: Concerned with the composition of objects together to form larger structures.

- Behavioral Patterns: Concerned with how objects interact with each other.

This article is going to present the Creational Design Patterns from the book. <br><br><br><br>

## Constructional Design Patterns

In object-oriented programming, we deal, well, with objects. And we usually create objects without putting too much thought into it. And that’s okay. Usually.

There are, yet, instances where it is better to be strategic about this. I will list scenarios that might help a beginner identify these instances:

The client should be able to indiscriminately use:
- Different types of similar objects, or
- Different families (styles) of compatible objects.

The construction of an object is complex/constrained/costly

Note that these are extremely simplified. The aim is to provide context and an introduction for those not yet familiar with these patterns.

### Scenario 1:  Indiscriminately use different types of similar objects or different families (styles) of compatible objects.




- The Factory Method Pattern: The client (aka your application) should be able to indiscriminately use different types of similar objects. These objects can be swapped with each other without the client ever knowing about it, or being inconvenienced by it.

  - Example: The test software on a test station (the client) should be able to indiscriminately use
    - power-supply-of-make-1, or
    - this-other-power-supply-of-make-2, or
    - in the future, this-not-yet-invented-power-supply-of-make-3
    - without ever changing anything in the test software (the client) in any way.<br><br>



  - Details: The Factory is in charge of creating and configuring objects. The pattern decouples your application from the internal workings of the factory. They know nothing about each other except for the common interface they share. The contract of that interface is such that:

    1. Your application agrees to expect the objects returned by the Factory to have and only have the capabilities defined by the interface.

    2. The Factory agrees only to return objects which implement the interface. As long as these agreements are respected, your application couldn’t care less about the nature of the objects the factory sends back. The application will never complain, never break no matter which objects are returned.




- The Abstract Factory Pattern: The client should be able to indiscriminately use different families (styles) of compatible objects. A family of objects of the same style essentially means that the objects are compatible with each other. To put it in an analogy, if you are manufacturing different sizes of phones, and outsourcing the manufacturing of the screen and the case, you must keep track of which screens go with which cases. This is exactly what the Abstract Factory does. It outsources the manufacturing of different sorts of objects but ensures that any set of returned objects remain compatible with each other.

  - Example: The test software on a first test station only supports GPIB and so should use:

    - A GPIB-style power supply and a GPIB-style function generator. These are compatible with each other.
    - But the same/unchanged test software also runs on a different test station that only supports USB. This station should use:
    - A USB-style power supply and a USB-style function generator.
    - While the test software is blissfully ignorant of these intricacies.<br><br>

  - Details: The “Abstract” in the abstract factory indicates that the factory does not actually do any of the creation. The abstract factory contains just enough intelligence to choose one of the Concrete Factories that back it up. The Concrete Factories do the actual job of creating objects. They are written to return the different types but uniquely-styled objects required by the client. To return to our example, the Abstract Factory would be backed up by 2 Concrete Factories: A GPIB-Concrete Factory and a USB-Concrete Factory.

Scenario 2: Complex/Constrained/Costly Object Creation

The Builder Pattern: This pattern is used when there is an unmanageable high number of variants for the object to be created. And this makes the construction of that object a complex task.

Example: An analogy that has helped me understand this pattern is that of a house building. There is a client who comes to our building team and requires the most basic house. Then a second client comes to us and requires a basic house with a pool. Another client has a different set of requirements. He wants a one-story fancy house, with trees, and a pool.
Yet, another client requires yet another type of house: two stories, circular windows, trees on the one side of the house with a fountain, 2 pools on the other side of the house.

The object that must be created has a nature that lends itself to various, ever-growing numbers of requirements. Managing this in your code can quickly become a nightmare.

Details: Under the hood, this pattern consists of a huge number of highly specialized agents that know how to carry a specific task in the construction process. The agents build a feature of the object to be created and only know how to build this feature. It is the job of a director typically part of the pattern to orchestrate them and call them in the right order. The Director will ensure that eventually the object that meets the specification of your application is fully formed. It is usually the point of contact with your application.



The Singleton Pattern: This pattern might arguably be the easiest to understand. Your application requires one and only one instance of a particular object. That might be because creating that object is expensive, or because it contains a global state that must be shared throughout your application. Whatever the reason, the singleton must be guaranteed to exist as only one instance.

Example: Your application uses a data store that must be globally accessed throughout your application. Since data is centralized there, your application needs a data structure that will guarantee that there can never be 2 or more instances of the data store that exist at the same time: A singleton

Details: The singleton pattern might be easy to understand, but the implementation is not always obvious. Depending on the programming language in use, different approaches can be taken. It is worth mentioning that when examining a particular implementation one should keep in mind considerations such as lazy loading, thread-safe implementations,...

The Prototype Pattern: This pattern is all about cloning. It is used when creating an object that is costly or expensive. To circumvent this problem, your application can resort to cloning a previously existing instance of that object. This keeps your application away from re-creating these objects from scratch.

Example: An object might require a complex, time consuming, costly database operation. And we want to limit this operation as much as possible. One strategy to considerably limit this cost, especially when multiple instances of the object are required, could be:

Create a first instance meant to be used as a cache. The first instance would perform the costly operation. Then, thereafter, every new instance that must be created can be cloned from the cached instance.

Details: The pattern is quite easy to understand, but special care must be put into its implementation. Cloning must not be implemented as a shallow copy especially if the object to be cloned is composed of nested objects. Another important consideration is to keep in mind circular references.




A Quick overview of pros and cons

“There is no such thing as a free launch”. Everything that gives you an edge, does that by paying for a price one way or another. Knowing the price paid, and the advantages given can help make informed decisions about what to do in a particular context.

We will look at some of the advantages of these patterns but also the disadvantages to must be kept in mind when using them.

The Factory Method Pattern:

Pros:

It decouples the client's implementation from the creation logic.
It also decouples the client application from the type of object that it uses.
It enables the extension of the application by allowing the introduction of new devices.

Cons:

Increase in the number of classes in the system to accommodate the pattern.



The Abstract Factory Pattern:

Pros:

Similarly to the factory method pattern, it decouples the client implementation from the creation logic.
It also decouples the client application from the logic that manages styles and objects' compatibilities.
It enables the extension of the application by allowing the later introduction of new families/styles of devices.
Moreover, it guarantees that the client application will always receive objects that are compatible with each other.

Cons:

Increase in the number of classes in the system to accommodate the pattern.

The Singleton Pattern:

Pros:

If your application has the requirements/constraints that are inherent to the singleton. Then the pattern offers a neat solution to accommodate these requirements. These requirements are usually understood as guaranteeing that an object exists only in one instance.
It can be used to contain global states, shared resources.

The singleton is lazily initialized. It is initialized only when it is required for the first time.

Cons:

There are many things that are held against the singleton pattern. The first one is that it tightly couples classes together and can do so in the least obvious way. By definition, this fact is considered a bad design.
It makes testing, refactoring, understanding your code difficult.

Global access to the object can introduce race conditions. It can produce intractable bugs, not easily reproducible, testable, or fixable.

Its implementation requires special considerations when it is used in a multithreaded environment.

It is generally advised to redesign the system to completely remove the need for this pattern.

The Builder Pattern:

Pros:

The builder addresses the challenges of creating an extremely complex object. It removes the need to write a constructor with tens of parameters to accommodate this complexity.

It allows code reuse between the creation of different objects with different creational requirements.

This complexity is encapsulated in a class and decoupled from the client application.

Cons:

Increase in the number of classes in the system to accommodate the pattern. This especially true in the case of the Builder.

The Prototype Pattern:

Pros:

This pattern is born out of the need to cut the inconvenience, costs of creating some objects. The first advantage of using this pattern is exactly that: The cost or toll on resources required to build the object is limited.

Cons:

Cloning can be tricky in the presence of circular references

Conclusion

Design patterns make you a better developer. They also provide you with wisdom, reusable solutions to commonly occurring problems in software development.

Creational patterns address issues that can be fixed by rethinking the way objects are created. Some of the scenarios that apply to creational patterns are:

When a client (aka your application) needs to be able to use different types of objects interchangeably (the factory method). Or when it needs to use different families/styles of internally compatible objects (the abstract factory).

When the creation of an object is problematic. The builder pattern used when object creation is subject to an ever-growing number of requirements with various features. The singleton used when the object is required to exist only as one instance ever. Finally, the prototype used when creating the object is costly, in terms of time, money, resources.

These patterns are not difficult to learn but will definitely make your journey as a software developer better. This article is only meant to introduce some of these patterns to you. My aim is that you are motivated to learn and internalize them. I hope I have moved you toward that end.


