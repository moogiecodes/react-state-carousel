import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

// Ask about this test! Can we render and then move foward?
it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel/>);

   // move forward in the carousel
   const rightArrow = queryByTestId("right-arrow");
   fireEvent.click(rightArrow);

  // expect the second to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backwards in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the image to be the first image
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

// Smoke
it("renders without crashing", function () {
  render(<Carousel/>);
});

// Snapshot
it("matches the snapshot", function() {
  const { asFragment } = render(<Carousel title="Shells from far away beaches." />);
  expect(asFragment()).toMatchSnapshot();
});


it("left arrow should not show up on the first image", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel/>);

  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
});

it("right arrow should not show up on the last image", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel/>);
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
});

