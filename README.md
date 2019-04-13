# Gilded Rose Refactoring Kata

Taken from https://github.com/emilybache/GildedRose-Refactoring-Kata

My steps of refactoring:

First I added `nodemon` to automate my work.
So in one terminal I run `npm run compile:dev` to compile and watch for changes.
In the second terminal I run `npm run start:dev` and watch for changes in `gilded-rose.ts` file.
In the third terminal I run `npm run test:dev` to run tests and watch for changes in `gilded-rose.spec.ts` file.

Secondly I have written tests based on results found in `tests_results_stdout.gr` file. I updated "Conjured" item tests results, as it seems that this item rules had not yet been implemented.

Thirdly I refactored `updateQuality` method. At the beginning I extracted the particular item rules one by one as I decided that `switch statement` would best fit here. I also created additional functions with meaningful names, which makes the code more readable then the code in the beginning.