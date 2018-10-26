import React from 'react';

/**
 *  Functional Emoji Component
 *  -Promotes good practices, accessibility, reusability
 *  
 *  Component takes two props: label & symbol
 *  -If present, the label is used to generate an aria-label
 *  which will be read by a user's screen reader. If absent, 
 *  aria-label is left blank and aria-hidden is set to true.
 *  This means it will be ignored by the screen reader. 
 *  This is a good practice if the emoji doesn't add anything
 *  to the website other than a bit of flair.
 * 
 *  -The symbol, which will be a string containing the emoji,
 *  is passed into the returned span.
 */

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ?
    props.label: ""}
        aria-hidden={props.label ?
        "false" : "true"}
        >
            {props.symbol}
        </span>

);

/*
*  <Emoji symbol="🐑" label="sheep"/>
*    or
*  <Emoji symbol="🐑"/> 
*/

export default Emoji;