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
  * The code 'selection1 = createSelect();' needs to be in the setup function.
 
<img width="890" alt="截屏2025-01-26 14 36 28" src="https://github.com/user-attachments/assets/42c39b17-804d-4856-918e-87959a31df78" />
- I want to create a button for the user to pick the background.

- The background in the draw function blocks the images.
- * I deleted 'background(220);'. To solve the overlap problem, I will use the images with a same size.
 
<img width="972" alt="截屏2025-01-26 15 25 45" src="https://github.com/user-attachments/assets/8cadc88f-c5be-47a9-8ea1-5677637cb3df" />
- Add a slider that can change the background colour. - not working, images were not changing

- Tried to use the slider to manipulate the images individually. (using the first background image b1 as an example)

<img width="965" alt="截屏2025-01-26 15 31 44" src="https://github.com/user-attachments/assets/f77afe1d-2a57-4c04-a524-a9bd122ef4c7" />

- The slider can be used to manipulate b1, but b1 will be exist on the canvas from the start. Also if the user darg the slider for a few times, the image will be completely in a single colour (the alpha value cannot be adjusted)

<img width="970" alt="截屏2025-01-26 17 07 14" src="https://github.com/user-attachments/assets/3cee0663-7a11-42ab-a0a3-33c3b8cd10c2" />
- Double click to add details. (Reference: [https: //p5js.org/reference/p5/doubleClicked/](https://p5js.org/reference/p5/doubleClicked/))

- Added setTimeout to get a text 'Double click to add details' 10s after the sketch ran.

<img width="971" alt="截屏2025-01-26 17 07 59" src="https://github.com/user-attachments/assets/91deb795-ca2f-4264-9d25-a2d510364f17" />
- Added a checkbox to erase the texts. (Reference: https://p5js.org/reference/p5/erase/)

- 1. Texts were not be erased.
  2. Text were erased, but the areas that used to have texts were leave blanked.

 <img width="1124" alt="截屏2025-01-26 17 20 50" src="https://github.com/user-attachments/assets/7200a5f7-f85c-412e-aae4-db531df2461b" />
- So I made a button without any functions to replace the text outside the canvas.

<img width="1103" alt="截屏2025-01-26 19 46 21" src="https://github.com/user-attachments/assets/9e52bafb-fde9-4ccf-b2ef-0e55a0da5bc8" />
- Create input for users to write their signatures.

- I want users be able to change the words - But if I achieve this, the background image will be coverd.

- * I changed it back. (click the button to sign, the next line will be under the previous line)
 

At last, I changed all the images, reset the times, moved the input to a better place. 


### Problems met
- Image size too big, the canvas cannot fit - risize the image
- The text does not appear. (the background blocks the text) - move background from draw function to setup function

<img width="949" alt="截屏2025-01-25 23 52 38" src="https://github.com/user-attachments/assets/119feb9e-5996-4561-9b13-d830daa4c6bb" />
- If change the selection, the old image does not disappear. (old and new images overlap)

- Because I moved the background code from draw to setup.


- I cannot make the selection box appear after a few seconds.

- I found out that even the first box exist, once the one using the setTimeout function appears, the old one will stop working and the users can choose images from the new box. - I hided the first box by making the x-Pos a negative number.


### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-4-task/
