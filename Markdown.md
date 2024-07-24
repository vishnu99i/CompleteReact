Markdown important topics [Markdown notes](https://www.markdownguide.org/basic-syntax/).

To quickly turn a URL or email address into a link, enclose it in angle brackets.

<https://www.markdownguide.org>  
<gmail@example.com>

***
---
___


```Javascript
function printHello(){
   console.log("Hello)
}
```
------------------------------

------------------------------

![Markdown file Icon](./Mardown.png)

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

[![An old rock in the desert](./Mardown.png "Shiprock, New Mexico by Beau Rogers")](https://www.markdownguide.org/basic-syntax/)

------------------------------

To emphasize links, add asterisks before and after the brackets and parentheses. To denote links as code, add backticks in the brackets.

I love supporting the **[Markdown file](https://www.markdownguide.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).

-----------------------------

# Heading level 1
## Heading level 1
### Heading level 1
#### Heading level 1
##### Heading level 1
###### Heading level 1


Heading level 1
===============


Heading level 2
---------------


To create a line break or new line,end a line with two or more spaces and then type return.  
Pargraph and new line.


I just love **bold text**.  
I just love __bold text__.  
Bold**text**


Italicized text is the *cat's meow*.  
Italicized text is the _cat's meow_.  
A*cat*meow


This text is ***really important***.  
This text is ___really important___.  
This text is __*really important*__.  
This text is **_really important_**. 
This is really***very***important text.


> To create a blockquote, add a > in front of a paragraph.


Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.  


Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.


Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

--------------------

Ordered Lists

1. First item
2. Second item
3. Third item
4. Fourth item

-------------------------------

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

------------------------------

Unordered lists

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

------------------------------

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item  

------------------------------

Starting Unordered List Items With Numbers

- 1968\. A great year!
- I think 1969 was second best.

------------------------------

Code blocks are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

      <html>
         <head>
         </head>
         <body>
         </body>
      </html>

------------------------------

To denote a word or phrase as code, enclose it in backticks (`).

At the command prompt, type `nano`.

If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).

``Use `code` in your Markdown file.``

------------------

To use HTML, place the tags in the text of your Markdown-formatted file.

This **word** is bold. This <em>word</em> is italic.

-------------------------