A weather app written in React

View the live website here: http://forecast.slowbird.me/


TODO

-Some cities can be searched by name but not by zipcode.

-Add icons

XShow all three days of pulled weather. (Merged Williams code that helped achieve this)

-Add button for C or F conversion

-Enter key submits


////
Yeah you always have to check editable before length. I often forget to error check. It’s a bad habit I get into when I’m working in production.
William sent Today at 12:32 PM
Check existence*

William sent Today at 12:52 PM
I don't remember your code but one way to handle this kind of thing (promises/async data) is to put prevState in componentDidUpdate() {} and check for a change in state to then do stuff using an if statement.
William sent Today at 12:52 PM
for example
  componentDidUpdate(prevProps: DCPortalProps, prevState: DCPortalState) {
if (!prevState.data) {
William sent Today at 12:52 PM
that will only execute after the component updates and changes 'data' in state. sometimes there are issues with object declarations, but generally speaking that's a way to control the flow of information. IF you already knew this then awesome.
