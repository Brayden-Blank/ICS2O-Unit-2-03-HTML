// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets users address number and street and shows it back to the user
 */

function enterClicked() {
  //input
  const streetNumber = parseInt(document.getElementById("address-number").value)
  const streetName = document.getElementById("street-name").value

  //output
  document.getElementById("address").innerHTML = 
    "<p>Your address is: " + streetNumber + ", " + streetName + "!<p>"
}