# What is Sass ?
In short, Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. The aim is to make the coding process simpler and more efficient.

### What is a CSS preprocessor ?

A CSS preprocessor is a scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS. Sass is perhaps the most popular preprocessor around, but other common examples include Less and Stylus.

### Sass

Sass (Syntactically Awesome Style Sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.

Sass is compatible with all versions of CSS. The only requirement for using it is that you must have Ruby installed.

### How to use Sass

Sass includes two syntax options:

- SCSS (Sassy CSS): Uses the .scss file extension and is fully compliant with CSS syntax.
- Indented (simply called 'Sass'): Uses .sass file extension and indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write.

Note that files can be converted from one syntax to the other using the sass-convert command.

### Variables
Just like other programming languages, Sass allows the use of variables that can store information you can use throughout your style sheet. For example, you can store a colour value in a variable at the top of the file, and then use this variable when setting the colour of your elements. This enables you to quickly change your colours without having to modify each line separately.

### Nesting
Nesting is a double-edged sword. While it provides an excellent method for reducing the amount of code you need to write, it can also lead to over-qualified CSS if not executed carefully. The idea is to nest your CSS selectors in such a way as to mimic your HTML hierarchy.

### Partials
Partials are smaller Sass files that can be imported (see next section) into other Sass files. Think of partials as code snippets. With these code snippets, your CSS can now be modular and easier to maintain. A partial is designated as such by naming it with a leading underscore: _partial.scss.

### Import
Used with Partials (see previous section), the @import directive allows you to import your partial files into the current file, to build one single CSS file. Be mindful of how many imports you're using as an HTTP request will be generated for each one.

### Mixins
One of the advantages of using preprocessors is their ability to take complex, long-winded code and simplify it. This is where mixins come in handy! 

### Extend/Inheritance
The @extend directive has been called one of Sass' most powerful features. After seeing it in action, it's clear why.

The idea is that with this directive you won't have to include multiple class names on your HTML elements and can keep your code DRY. Your selectors can inherit the styles of other selectors, and then be easily extended when required. Now that's powerful.

### Operators
Having the ability to perform calculations in your CSS allows you to do more, like convert pixel values into percentages. You'll have access to standard maths functions like addition, subtraction, multiplication and division. Of course, these functions can be combined to create complex calculations.

In addition, Sass includes a few built-in functions to help manipulate numbers. Functions like percentage(), floor() and round() to name a few.

Additional information and examples can be found [here](https://sass-lang.com/guide).
