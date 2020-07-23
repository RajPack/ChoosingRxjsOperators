import { Injectable } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private backend: BackendService) {
    this.setMockDBResponses();
  }
  setMockDBResponses() {
    this.backend.setResponse({
      topics,
      detail: detailDBHandler
    });
  }

  fetchTopics() {
    return this.backend.Get('topics', null);
  }

  fetchTopicData(topic) {
    return this.backend.Get('detail', topic);
  }
}

//  mocked backed behavior
export const topics = [
  'java',
  'javascript',
  'Clojure',
  'Lisp',
  'smalltalk',
  'BCPL',
  'Python'
];

const topicData = {
  java:
    // tslint:disable-next-line: quotemark
    "James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991.[23] Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time.[24] The language was initially called Oak after an oak tree that stood outside Gosling's office. Later the project went by the name Green and was finally renamed Java, from Java coffee, the coffee from Indonesia.[25] Gosling designed Java with a C/C++-style syntax that system and application programmers would find familiar",
  javascript:
    'The Mosaic web browser was released in 1993. As the first browser with a graphical user interface accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web.[10] The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. Navigator quickly became the most used browser. During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.',
  Clojure:
    // tslint:disable-next-line: quotemark
    "Rich Hickey developed Clojure because he wanted a modern Lisp for functional programming, symbiotic with the established Java platform, and designed for concurrency.Clojure's approach to state is characterized by the concept of identities, which are represented as a series of immutable states over time. Since states are immutable values, any number of workers can operate on them in parallel, and concurrency becomes a question of managing changes from one state to another. For this purpose, Clojure provides several mutable reference types, each having well-defined semantics for the transition between states.",
  Lisp:
    // tslint:disable-next-line: quotemark
    "Lisp (historically LISP) is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation.[3] Originally specified in 1958, Lisp is the second-oldest high-level programming language in widespread use today. Only Fortran is older, by one year. Lisp has changed since its early days, and many dialects have existed over its history. Today, the best-known general-purpose Lisp dialects are Racket, Common Lisp, Scheme and Clojure. Lisp was originally created as a practical mathematical notation for computer programs, influenced by the notation of Alonzo Church's lambda calculus. It quickly became the favored programming language for artificial intelligence (AI) research. As one of the earliest programming languages, Lisp pioneered many ideas in computer science, including tree data structures, automatic storage management, dynamic typing, conditionals, higher-order functions, recursion, the self-hosting compiler and the read–eval–print loop",
  smalltalk:
    'There are a large number of Smalltalk variants. The unqualified word Smalltalk is often used to indicate the Smalltalk-80 language, the first version to be made publicly available and created in 1980. The first environment to run the Smalltalk were Xerox Alto computers. Smalltalk was the product of research led by Alan Kay at Xerox Palo Alto Research Center (PARC); Alan Kay designed most of the early Smalltalk versions, Adele Goldberg wrote most of the documentation, and Dan Ingalls implemented most of the early versions. The first version, termed Smalltalk-71, was created by Kay in a few mornings on a bet that a programming language based on the idea of message passing inspired by Simula could be implemented in "a page of code". A later variant used for research work is now termed Smalltalk-72 and influenced the development of the Actor model. Its syntax and execution model were very different from modern Smalltalk variants.',
  BCPL:
    'BCPL ("Basic Combined Programming Language") is a procedural, imperative, and structured programming language. Originally intended for writing compilers for other languages, BCPL is no longer in common use. However, its influence is still felt because a stripped down and syntactically changed version of BCPL, called B, was the language on which the C programming language was based. BCPL introduced several features of many modern programming languages, including using curly braces to delimit code blocks. BCPL was first implemented by Martin Richards of the University of Cambridge in 1967.',
  Python:
    'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library. Python was conceived in the late 1980s as a successor to the ABC language. Python 2.0, released in 2000, introduced features like list comprehensions and a garbage collection system with reference counting.'
};

const detailDBHandler = topic => topicData[topic];
