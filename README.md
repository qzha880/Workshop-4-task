# Workshop-4-task
Workshop 4 task

## Changes made and experiments during coding
<img width="951" alt="截屏2025-01-26 01 14 02" src="https://github.com/user-attachments/assets/8a6532a8-ab1e-4c88-8ba3-d803ff898f6b" />
- Create another selection box, see if both works fine

- Once the second selection box been added, the first one stop working.
- I changed 'selection' to 'selection1' & 'selection2' - works fine


- I want to make a start page. (after the user click the mouse, the selection box will appear)

- * Cannot use a rectangle shape to cover the whole canvas and use mousePressed function to clear the rect. (always items on the top of the rect, if I move rect to the top, the overlap images problem will come up again)
- * Experimented with setTimeout and mousePressed function to control when the selection boxes appear. (even the boxes apppeared as I planed, the selections will not work)

### Problems met
- Image size too big, the canvas cannot fit - risize the image
- The text does not appear. (the background blocks the text) - move background from draw function to setup function

<img width="949" alt="截屏2025-01-25 23 52 38" src="https://github.com/user-attachments/assets/119feb9e-5996-4561-9b13-d830daa4c6bb" />
- If change the selection, the old image does not disappear. (old and new images overlap)

- Because I moved the background code from draw to setup.


### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-4-task/
